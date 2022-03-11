import React from 'react'
import { Success } from '../../src/components/Alert';
import { Form, Field, Reset, Submit } from '../../src/components/Form'

export default {
  title: 'Components/Form',
  component: Form,
};

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Form</h1>
  <p className="intro">
    A form is a collection of fields.  The <code className="code">Form</code> component
    provides a context for a single form.  It defines the form field schema, handles submission of form data.
    and reports any server-side validation errors.
  </p>
</>

export const BasicForm = () =>
  <>
    <p className="mar-t-none">
      A form is defined using the <code className="code">Form</code> component.
      It supports a number of properties that are mapped to form attributes:{' '}
      <code className="code">id</code>,{' '}
      <code className="code">name</code>,{' '}
      <code className="code">action</code>,{' '}
      <code className="code">method</code>,{' '}
      <code className="code">encType</code> and {' '}
      <code className="code">className</code>.{' '}
      The <code className="code">title</code> property can be used
      to add a title for the form.
      You can also define an <code className="code">icon</code> to
      go along with it.
    </p>
    <p>
      The <code className="code">Form</code> component can contain any markup that
      is normally valid in an HTML <code className="code">form</code> element.
      The <code className="code">Field</code> component is used to indicate where
      fields should appear.
    </p>
    <Form
      action="/not/really/there" method="GET"
      title="Login" icon="user"
      className="shadow-1 pad-t-4 pad-b-6 pad-h-8 mar-h-8"
    >
      <h5>Please enter your details to login</h5>
      <Field name="email" label="Email Address" iconLeft="at"/>
      <Field name="password" label="Password" iconLeft="key"/>
      <Field name="non-badger" input="checkbox" iconLeft="badger" label="Are you human?" text="I am not a badger"/>
    </Form>
  </>

export const InlineFieldDefinitions = () =>
  <>
    <p className="mar-t-none">
      In a simple form the <code className="code">Field</code> parameters can
      be written inline.
    </p>
    <Form>
      <Field name="email" label="Email Address" iconLeft="at"/>
      <Field name="password" label="Password" iconLeft="key"/>
    </Form>
  </>

export const ExternalFieldDefinitions = () => {
  const fields = {
    email: {
      label: 'Your Email Address',
      iconLeft: 'at'
    },
    password: {
      label: 'Your Password',
      iconLeft: 'key'
    },
  }
  return <>
    <p className="mar-t-none">
      For more complicated forms you might want to define the field data centrally
      and pass it to the <code className="code">Form</code> component via the
      {' '}<code className="code">fields</code> property.  You can then embed
      <code className="code">Field</code> components with a single <code className="code">name</code> property.
      The additional data items defined in the corresponding <code className="code">fields</code> entry
      will be added as properties to the <code className="code">Field</code> component.
    </p>
    <p>
      This can also be useful if you want to share field definitions between multiple
      forms.  For example, the form to add some data might have slightly different fields )
    </p>
    <Form fields={fields}>
      <Field name="email"/>
      <Field name="password"/>
    </Form>
  </>
}

export const SharingFieldDefinitions = () => {
  const fields = {
    name: {
      label: 'Your Name',
      iconLeft: 'user'
    },
    email: {
      label: 'Your Email Address',
      iconLeft: 'at'
    },
    password: {
      label: 'Your Password',
      iconLeft: 'key'
    },
  }
  return <>
    <p className="mar-t-none">
      This can also be useful if you want to share field definitions between multiple
      forms.  For example, the forms for a user to register and login might both use the
      same <code className="code">email</code> field.  You can define as many different
      fields as you like in the <code className="code">fields</code> data, but <i>only</i>{' '}
      those that are specifically named by <code className="code">Field</code> objects
      will be considered part of the form.
    </p>
    <h3>Login Form</h3>
    <Form fields={fields} className="mar-b-4">
      <Field name="email"/>
      <Field name="password"/>
    </Form>
    <h3>Register Form</h3>
    <Form fields={fields}>
      <Field name="name"/>
      <Field name="email"/>
    </Form>
  </>
}

export const FormValues = () =>
  <>
    <p className="mar-t-none">
      The <code className="code">values</code> property can be used to defined the
      values for various fields.  This is typically used when editing existing data.
    </p>
    <Form values={{ name: 'Bobby Badger', occupation: 'Badgering' }}>
      <Field name="name" label="Name"/>
      <Field name="occupation" label="Occupation"/>
    </Form>
  </>


export const ResetButton = () =>
  <>
    <p className="mar-t-none">
      The <code className="code">Reset</code> component can be used to
      render a button to reset the form fields to their initial values.
      Try changing the values in the form below then click on the reset
      button to reset them.
    </p>
    <Form values={{ name: 'Bobby Badger', occupation: 'Badgering' }}>
      <Field name="name" label="Name"/>
      <Field name="occupation" label="Occupation"/>
      <Reset color="brown" solid className="mar-t-2"/>
    </Form>
  </>

export const SubmitButton = () => {
  const [success, setSuccess] = React.useState();
  const onSubmit = submit => {
    const name = submit.values.name;
    if (name.match(/badger/i)) {
      // fake a valid server response
      return Promise.resolve({
        status: 200,
        data: { message: 'Welcome ' + name }
      });
    }
    else {
      // fake an invalid server response
      return Promise.resolve({
        status: 400,
        data: {
          error: "You're not a member of the badger family!", // eslint-disable-line quotes
          fields: {
            name: {
              valid: 0,
              message: 'Try putting "Badger" in here somewhere.'
            }
          }
        }
      });
    }
  }
  return <>
    <p className="mar-t-none">
      The <code className="code">Submit</code> component can be used to
      render a button to submit the form.  The <code className="code">onSubmit</code> handler
      can be used to intercept the form submission.
      The <code className="code">onSuccess()</code> handler can be provided to
      handle a successful response, and <code className="code">onFailure()</code> can
      be provided to handle an unsuccessful response.
    </p>
    <Form
      values={{ name: 'Simon Stoat' }}
      onSubmit={onSubmit}
      onSuccess={ data => setSuccess(data.message) }
      onFailure={ data => console.log('FAILED: ', data) }
    >
      <Field name="name" label="Name"/>
      <Field name="occupation" label="Occupation" required/>
      <Submit color="green" solid className="mar-t-2"/>
      { success && <Success text={success} /> }
    </Form>
  </>
}

export const FormErrors = () =>
  <>
    <p className="mar-t-none">
      The <code className="code">error</code> property can be set to
      display a form error.  This will usually happen automatically
      when an error occurs, e.g. when the server returns an error after
      submission of the form.
    </p>
    <Form title="Login" icon="user" error="Ooops!  Something went wrong.">
      <Field name="email" label="Email" required/>
      <Field name="password" label="Password" required/>
    </Form>
  </>

export const CustomFormErrors = () =>
  <>
    <p className="mar-t-none">
      The <code className="code">errorIcon</code>, <code className="code">errorHeadIcon</code>,
      and <code className="code">errorHeadline</code> properties can be set to customise
      the form error.
    </p>
    <Form
      title="Login" icon="user" error="Ooops!  Something went wrong."
      errorIcon="alert" errorHeadIcon="warning" errorHeadline="Oh Noes!"
      errorClass="stripe"
    >
      <Field name="email" label="Email" required/>
      <Field name="password" label="Password" required/>
    </Form>
  </>

export const ValidationErrors = () =>
  <>
    <p className="mar-t-none">
      The <code className="code">errors</code> property can be set to
      display a list of one or more validation errors.  Again, this typically happens
      automatically when validation errors occur, e.g. on form submission (client side
      validation) or when the server returns validation errors (server side validation).
    </p>
    <p>
      Try submitting the form without entering values for either of the required fields.
    </p>
    <p>
      You can supress the display of errors in the form header and/or footer by
      setting the <code className="code">errorsInHeader</code> and <code className="code">errorsInFooter</code> properties
      to <code className="code">false</code>.
    </p>
    <div className="shade pad-6">
      <Form
        title="Login" icon="user" className="rounded border pad-v-2 pad-h-4 shadow-2 bg-white"
      >
        <Field name="email" label="Email" required />
        <Field name="password" label="Password" required
          requiredMessage="You must enter your password, you muppet!"/>
        <Submit color="green" solid className="mar-t-2"/>
      </Form>
    </div>
  </>