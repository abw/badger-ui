import React from 'react'
import { Generator } from '@abw/react-context-generator'
import { bindHandlers, addDebug } from '../../utils/index.js'
import { buildFields, resetFields } from './Utils.jsx'

class Context extends React.Component {
  static defaultProps = {
    validateOnChange:  false,
    validateOnBlur:    true,
    errorsInHeader:    true,
    errorsInFooter:    false,
    enctype:           'application/x-www-form-urlencoded',
    method:            'get',
    fields:            { },
    values:            { },
    hidden:            { },
    errors:            [ ],
  }
  constructor(props) {
    super(props);
    this.fields = { };
    this.state = {
      validating: false,
      submitting: false,
      errors: [ ...this.props.errors ],
      hidden: { ...this.props.hidden },
      fields: buildFields(
        this.props.fields, this.props.values
      )
    };
    this.handlers = bindHandlers(
      this,
      'attachField detachField submitField submitForm resetForm setValues setHidden'
    );
    if (this.props.onLoad) {
      this.props.onLoad(this);
    }
    addDebug(this, props.debug, 'Form Context', 'blue');
  }
  componentDidMount() {
    this.mounted = true;
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  attachField(name, field) {
    this.debug('attaching [%s] field => %o', name, field);
    this.fields[name] = field;
  }
  detachField(name) {
    this.debug('detaching [%s] field', name);
    delete this.fields[name];
  }
  resetForm() {
    if (! this.mounted) {
      return;
    }
    this.setState({
      fields: resetFields(this.state.fields, this.props.values),
      errors: [ ],
      error: null,
    });
    Object.values(this.fields).map(
      field => field.resetField()
    );
    if (this.props.onReset) {
      this.props.onReset();
    }
  }
  setValues(values) {
    Object.keys(values).forEach(
      key => this.fields[key]?.setValue(values[key])
    );
  }
  setHidden(values) {
    const hidden = {
      ...this.state.hidden,
      ...values
    };
    this.setState({ hidden });
  }
  submitForm(event) {
    this.debug('submitForm()');
    event.preventDefault();
    this.setState({ submitting: true });
    this.submit = {
      values: { ...this.state.hidden },
      errors: [ ],
      validFields: { },
      invalidFields: { },
      nFields: Object.values(this.fields).length,
      nValid: 0,
      nInvalid: 0,
    };
    return Promise.all(
      Object.values(this.fields).map(
        field => field.submitField(this.handlers.submitField)
      )
    )
      .then(
        () => this.validateForm(this.submit)
      )
      .then(
        submit => submit
          ? this.sendRequest(submit)
          : this.cancelRequest(submit)
      )
  }
  submitField(field) {
    const { name } = field;
    let submit = this.submit;
    let status = field.status || 'undefined';

    this.debug('submitField() %s status is %s', name, status);

    if (field.valid) {
      submit.validFields[name] = field;
      submit.nValid++;
      Object.assign(submit.values, field.data || {[name]:field.value});
    }
    else {
      submit.invalidFields[name] = field;
      submit.nInvalid++;
      submit.errors.push({
        field:   field.caption || field.label || name,
        message: field.error || field.message
      });
    }
  }
  validateForm(submit) {
    this.debug(
      'validateForm: %s valid:[%s/%s] invalid:[%s/%s] => %s',
      submit.nInvalid ? 'FAIL' : 'PASS',
      submit.nValid, submit.nFields,
      submit.nInvalid, submit.nFields,
      submit.errors.join(', ')
    );
    if (submit.nInvalid || submit.nValid !== submit.nFields) {
      this.debug('validateForm() - FAIL');
      if (this.props.onInvalid) {
        this.props.onInvalid(submit, this);
      }
      return undefined;
    }
    else {
      this.debug('validateForm() - PASS');
      submit.action = this.props.action;
      submit.method = this.props.method;
    }
    // TODO: should allow form-level validation
    return submit;
  }
  cancelRequest(submit=this.submit) {
    const errors = (submit && submit.errors) || [ ];
    this.debug('cancelRequest()');
    this.stopSubmitting({ errors });
  }
  sendRequest(submit) {
    this.setState({
      error:  undefined,
      errors: undefined,
    });

    if (this.props.onSubmit) {
      this.debug('calling custom onSubmit() handler');
      return this.handleResponse(
        this.props.onSubmit(submit, this)
      );
    }
    else if (submit.action) {
      console.log('SUBMIT REQUEST ABORTED: form.action is not currently supported', submit);
      this.stopSubmitting({ errors: [ ] });
      return Promise.resolve('No submit action defined');
    }
    else {
      console.log('SUBMIT REQUEST ABORTED: no form action, submit or onSubmit handler defined: ', submit);
      this.stopSubmitting({ errors: [ ] });
      return Promise.resolve('No submit action defined');
    }
  }
  stopSubmitting(props={}) {
    this.debug('stopSubmitting()');
    if (this.mounted) {
      this.setState({ submitting: false, ...props });
    }
  }
  handleResponse(response) {
    response.then(
      response => {
        this.stopSubmitting();

        if (response.ok || response.status === 200) {
          this.debug('handleResponse() => VALID (200): ', response);
          return this.validResponse(response.data);
        }
        else if (response.status >= 400 && response.status < 500) {
          this.debug('handleResponse() => INVALID (400-500): ', response);
          return this.invalidResponse(response.data);
        }
        else {
          this.debug('handleResponse() => INVALID (???): ', response);
          throw new Error('Invalid response: ' + response.status);
        }
      }
    )
      .catch(
        response => {
          if (this.mounted) {
            this.setState({ submitting: false });
          }
          this.debug('handleResponse() => INVALID (caught error): ', response);
          return this.invalidResponse(response.data);
        }
      )
  }
  validResponse(response) {
    this.debug('validResponse(): ', response);
    if (this.props.onSuccess) {
      this.debug('calling onSuccess() handler ', response);
      this.props.onSuccess(response);
    }
    return response;
  }
  invalidResponse(response) {
    this.debug('invalidResponse(): ', response);
    if (! this.mounted) {
      return;
    }
    this.setState({
      error:  response.error || response.message,
      errors: response.invalid_fields || response.errors,
    });
    if (response.fields) {
      Object.keys(response.fields).forEach( name => {
        const data  = response.fields[name];
        const field = this.fields[name];
        if (field) {
          if (data.valid) {
            field.setValid({ message: data.message });
          }
          else {
            field.setInvalid({ message: data.message });
          }
        }
        else {
          console.log('unknown field: %s', name);
        }
      });
    }
    // Some fields (like recaptcha) shouldn't retain their value after
    // a submission - these should be marked with the transient property
    Object.keys(this.fields).forEach(
      key => {
        const field = this.fields[key];
        if (field.props.transient) {
          field.resetField();
        }
      }
    );
    if (this.props.onFailure) {
      this.debug('Calling onFailure() handler');
      this.props.onFailure(response);
    }
    return response;
  }


  //-----------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------
  render() {
    const form = {
      ...this.props,
      ...this.state,
      ...this.handlers
    };
    this.debug('form render: ', form);
    // call the render prop passing a form object containing
    // all the properties for this component, all the state,
    // and all of the callable handler functions.
    return this.props.render({ form });
  }
}

export default Generator(Context)
