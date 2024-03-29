import React from 'react';
import { Form, Field, Submit, Reset } from '../../src/components/Form';
import { sleep, Theme } from '../../src/utils'

export default {
  title: 'Theming/Form'
};

export const ThemedForm = () => {
  const MyTheme = {
    Form: {
      showRequired: true,
      showOptional: true,
      className:    'compact',
    },
    FormSubmit: {
      solid: true,
    },
  };
  return <>
    <p className="mar-t-none">
      The <code className="code">Form</code> can be themed to set default
      values for various options.  In this example we set the <code className="code">showRequired</code> and{' '}
      <code className="code">showOptional</code> flags on the themed form and
      add the <code className="code">compact</code> class.  We also set
      the <code className="code">solid</code> option for the <code className="code">FormSubmit</code> button.

    </p>
    <div className="row">
      <div className="split-2 gut-r">
        <h4>Default</h4>
        <Form>
          <Field name="email" label="Email" required />
          <Field name="password" label="Password" required/>
          <Field name="animal" label="Favourite Animal"/>
          <Submit color="green" className="mar-t-2"/>
        </Form>
      </div>
      <div className="split-2 gut-l">
        <h4>Themed</h4>
        <Theme.Provider {...MyTheme}>
          <Form>
            <Field name="email" label="Email" required />
            <Field name="password" label="Password" required/>
            <Field name="animal" label="Favourite Animal"/>
            <Submit color="green" className="mar-t-2"/>
          </Form>
        </Theme.Provider>
      </div>
    </div>
  </>
}


export const ThemedSavingSpinner = () => {
  const MyTheme = {
    FormSaving: {
      icon:         'radiation',
      color:        'black',
      overlayColor: 'black',
      bgColor:      'yellow',
      message:      'One moment please...'
    },
  };

  const onSubmit = () => sleep(5000).then(() => {
    // fake a valid server response
    return Promise.resolve({
      status: 200,
      data: { message: 'Hello' }
    });
  })
  return <>
    <p className="mar-t-none">
      The &quot;Saving...&quot; spinner in forms can be customised using numerous long-winded
      form properties.  If you want to change the default style for all the forms in your
      site then theming the <code className="code">FormSaving</code> is the way forward.
    </p>
    <Theme.Provider {...MyTheme}>
      <Form onSubmit={onSubmit}>
        <Field name="name" label="Name"/>
        <Field name="dob" label="Date of Birth"/>
        <Field name="animal" label="Favourite Animal"/>
        <Submit color="green" solid className="mar-t-2"/>
      </Form>
    </Theme.Provider>
  </>
}

export const ThemedValidationErrors = () => {
  const MyTheme = {
    FormErrors: {
      icon:         'radiation',
      className:    'small',
      headlineOne:  'One Error',
      headlineMany: 'Many Errors',
      titleOne:     'Please correct this error.',
      titleMany:    'Please correct all these errors.'
    },
  };

  return <>
    <p className="mar-t-none">
      The <code className="code">FormErrors</code> can be themed.
    </p>
    <p>
      Try submitting the form without entering values for either of the required fields.
    </p>
    <div className="shade pad-6">
      <Theme.Provider {...MyTheme}>
        <Form
          title="Login" icon="user" className="rounded border pad-v-2 pad-h-4 shadow-2 bg-white"
        >
          <Field name="email" label="Email" required />
          <Field name="password" label="Password" required
            requiredMessage="You must enter your password, you muppet!"/>
          <Submit color="green" solid className="mar-t-2"/>
        </Form>
      </Theme.Provider>
    </div>
  </>
}

export const ThemedButtons = () => {
  const MyTheme = {
    FormReset: {
      color: 'brown',
      solid: true,
    },
    FormSubmit: {
      color: 'green',
      solid: true,
    },
  };

  return <>
    <p className="mar-t-none">
      The <code className="code">FormSubmit</code> and <code className="code">FormReset</code> buttons can be themed.
    </p>
    <div className="shade pad-6">
      <Theme.Provider {...MyTheme}>
        <Form
          title="Login" icon="user" className="rounded border pad-v-2 pad-h-4 shadow-2 bg-white"
        >
          <Field name="email" label="Email" required />
          <Field name="password" label="Password" required
            requiredMessage="You must enter your password, you muppet!"/>
          <div className="flex space">
            <Reset  className="mar-t-2"/>
            <Submit className="mar-t-2"/>
          </div>
        </Form>
      </Theme.Provider>
    </div>
  </>
}
