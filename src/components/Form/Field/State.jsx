import React from 'react';
import Context from '../Context.jsx';
import FieldLayout from './Layout.jsx';
import States from './States.jsx';
import {
  Text,
  TextArea,
  Checkbox,
  Radio,
  Select,
  Static,
  Search,
} from '../Input/index.jsx';
import { addDebug, isDefined, isString } from '../../../utils/index.js';

const Debug = false;

let fieldId = 1;
export const nextFieldId = () => 'form-field-' + fieldId++;

const inputTypes = {
  text: Text,
  textarea: TextArea,
  checkbox: Checkbox,
  radio: Radio,
  static: Static,
  select: Select,
  search: Search,
  //    recaptcha:    Recaptcha,
};

class State extends React.Component {
  static defaultProps = {
    Layout: FieldLayout,
    Input: undefined,
    input: 'text',
    initialValue: null,
    disabled: false,
    validateOnChange: false,
    validateOnBlur: true,
    validateOnInvalid: true,
    minValidateLength: 1,
    showRequired: false,
    showOptional: false,
    requiredMessage: 'A value is required',
  };
  constructor(props) {
    super(props);
    this.mounted = false;
    //this.form = props.form;
    this.state = {
      id: this.props.id || nextFieldId(),
      initialValue: this.props.initialValue,
      focus: false,
      value: isDefined(this.props.initialValue)
        ? this.props.initialValue
        : this.props.default,
    };

    // validation can be provided via the "validate" prop
    // as a function taking a value and returning a Promise,
    // or via "validator" which is a function taking the value,
    // field data and pass and fail functions.  We wrap this up
    // in a Promise
    if (this.props.validate) {
      this.validateValue = this.props.validate;
    }
    else if (this.props.validator) {
      this.validateValue = (value, field) => {
        return new Promise((pass, fail) =>
          this.props.validator(value, field, pass, fail)
        );
      };
    }
    this.handlers = {
      onChangeEvent: this.onChangeEvent.bind(this),
      onChangeValue: this.onChangeValue.bind(this),
      onChange: this.onChange.bind(this),
      onFocus: this.onFocus.bind(this),
      onBlur: this.onBlur.bind(this),
      onReset: this.resetField.bind(this),
    };
    // create methods that set the state with pre-defined defaults
    this.stateSetter('setReset', States.reset);
    this.stateSetter('setUnvalidated', States.unvalidated);
    this.stateSetter('setValidating', States.validating);
    this.stateSetter('setValid', States.valid);
    this.stateSetter('setInvalid', States.invalid);
    this.stateSetter('setSubmitting', States.submitting);

    addDebug(this, Debug, `Form field "${props.name}"`, 'blue');
    this.debug(
      'Form field %s [initialValue:%o] [default:%o] [value:%o]',
      this.props.name,
      this.props.initialValue,
      this.props.default,
      this.state.value
    );
    if (this.props.onLoad) {
      this.props.onLoad(this);
    }
  }
  componentDidMount() {
    this.debug('componentDidMount');
    this.mounted = true;
    this.props.form.attachField(this.props.name, this);
    this.resetField();
  }
  componentWillUnmount() {
    this.debug('componentWillUnmount');
    this.mounted = false;
    this.props.form.detachField(this.props.name);
  }
  stateSetter(name, defaults) {
    this[name] = (state, callback) => {
      if (!this.mounted) {
        this.debug('skipping %s() because not mounted', name);
        return;
      }
      let newState = {
        ...state,
        ...defaults,
      };
      this.debug('setState %s: %o', name, newState);
      this.setState(
        newState,
        callback ? () => callback(this, newState) : undefined
      );
      return newState;
    };
  }
  resetField() {
    const value = isDefined(this.props.initialValue)
      ? this.props.initialValue
      : this.props.default;

    this.debug('resetField() resetting value to ', value);
    this.setReset({ value }, () => {
      if (this.inputRef) {
        this.inputRef.reset();
      }
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    });
  }
  onChange(event) {
    return this.onChangeEvent(event);
  }
  onChangeEvent(event) {
    return this.onChangeValue(
      event.target.type === 'checkbox'
        ? event.target.checked
          ? 1
          : undefined
        : event.target.value
    );
  }
  onChangeValue(value) {
    const {
      validateOnChange,
      validateOnInvalid,
      minValidateLength,
      prepareValue,
      onChange,
    } = this.props;
    const { invalid } = this.state;
    const length = value === undefined ? 0 : value.length;
    let validate = validateOnChange || (validateOnInvalid && invalid);

    this.debug('onChangeValue() value:', value);

    // allow any custom data preparation to run, e.g. convert to UPPER CASE
    if (prepareValue) {
      this.debug('onChangeValue() calling prepareValue: ', value);
      value = prepareValue(value, this);
      this.debug('onChangeValue() called prepareValue: ', value);
    }

    // don't validate if it's a short input < minValidateLength
    if (length < minValidateLength && !invalid) {
      validate = undefined;
    }

    // create a validation callback to run after the state is updated
    const validator = validate ? () => this.validateField() : undefined;

    // update the value and then run any validation callback
    this.setState({ value: value }, validator);

    // call any onChange handler to be notified that the value has changed.
    // BUG: If the onChange handler tries to read the value from the state
    // then it may be out of date because the setState() above hasn't completed.
    if (onChange) {
      onChange(value, this);
    }

    this.debug('onChangeValue() done, final value is ', value);
    return value;
  }
  setValue(value) {
    // JFDI - set the value, no side-effects
    this.setState({ value: value });
    this.debug('set field value to ', value);
  }
  setRef(r) {
    // used to store a reference to the input element so that we can reset it
    // if the server-side form validation fails (e.g. in the case of recaptcha)
    // where the user must peform the "I'm not a robot" check again.
    this.inputRef = r;
  }
  onFocus() {
    const { onFocus } = this.props;
    this.setState({ focus: true }, () => {
      if (onFocus) {
        this.debug('onFocus() calling custom handler');
        onFocus(this);
      }
      else {
        this.debug('onFocus() - nothing to do');
      }
    });
  }
  onBlur() {
    const { onBlur, validateOnBlur } = this.props;
    this.setState({ focus: false }, () => {
      if (onBlur) {
        this.debug('onBlur() calling custom handler');
        onBlur(this);
      }
      else {
        this.debug('onBlur() - nothing to do');
      }
      if (validateOnBlur) {
        this.debug(
          'onBlur() - calling validateField() (validateOnBlur option set)'
        );
        this.validateField();
      }
    });
  }
  validateField(options) {
    this.debug('validateField()');
    return new Promise(this.fieldValidator(options))
      .then((field) => this.setValid(field, this.props.onValid))
      .catch((field) => {
        console.log('UNCAUGHT VALIDATION ERROR: ', field);
        return this.setInvalid(field, this.props.onInvalid);
      });
  }
  fieldValidator(options = {}) {
    return (resolve, reject) => {
      this.debug('fieldValidator()');
      let field = this.prepareField();
      const validate = this.validateValue;
      const empty =
        field.value === undefined ||
        field.value === null ||
        field.value.length === 0;

      // we don't want to send any undefined/null values in case they get
      // stringified to "undefined" / "null" so we set them to empty strings
      if (empty) {
        field.value = '';
      }

      // set the field.validating flag and update the form state
      // to show which field is being validation
      Object.assign(field, { validating: true }, options);
      this.setValidating(field);

      //this.debug("fieldValidation prepared field: ", field);
      if (empty) {
        // an empty field is an error if it's required, otherwise
        // is an acceptable state of affairs.
        if (this.props.required) {
          this.debug('required FAIL on empty: ', field);
          field.message = this.props.requiredMessage;
          reject(field);
        }
        else {
          resolve(field);
        }
      }
      else if (validate) {
        // if there's a validate property then we run it
        this.debug('validating: ', field);
        validate(field.value, field)
          .then((value) => {
            field.value = value;
            this.debug('validation PASS, result: [%s] => ', value, field);
            resolve(field);
          })
          .catch((err) => {
            this.debug('caught: ', err);

            field.message = isString(err) ? err : err.message;
            this.debug(
              'validation FAIL, message: [%s] => ',
              field.message,
              field
            );
            reject(field);
          });
      }
      else {
        // otherwise all is good
        this.debug('no validation: ', field);
        resolve(field);
      }
    };
  }
  prepareField(name = this.props.name, value = this.state.value) {
    this.debug('prepareField()');
    let { prepareField } = this.props;
    let caption = this.props.label || this.props.text;
    let field = {
      ...States.reset,
      name: name,
      caption: caption,
    };
    //if (prepareValue) {
    //    value = prepareValue(value);
    //}
    field.value = value;
    field.initial = this.props.initialValue;
    field.changed = value !== this.props.initialValue;
    if (prepareField) {
      field = prepareField(field);
    }
    return field;
  }
  submitField(formHandler) {
    if (this.state.validated) {
      let field = {
        name: this.props.name,
        label: this.props.label,
        ...this.state,
      };
      this.debug(
        'submitField() - field is already validated: %s',
        field.status
      );
      return Promise.resolve(field).then(formHandler);
    }
    else {
      this.debug('submitField() - calling validateField()');
      return this.validateField({ submitting: true }).then(formHandler);
    }
  }
  renderProps() {
    const props = this.props;
    const name = props.name;
    const form = props.form;
    const Input =
      props.Input ||
      inputTypes[props.input] ||
      this.error(`Invalid input specified for ${name} field: ${props.input}`);
    const field = {
      ...props,
      ...this.handlers,
      ...this.state,
      Input,
      setRef: (r) => this.setRef(r),
    };
    this.debug('renderProps field: ', field);
    return {
      form: form,
      field: field,
    };
  }
  error(...args) {
    throw new Error(args.join(''));
  }
  render() {
    const props = this.renderProps();
    const { Layout } = this.props;
    this.debug('render() props: ', props);
    return <Layout {...props} />;
  }
}

export default Context.Consumer(State);
