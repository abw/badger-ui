import React from "react";
import { Form, Field, Submit } from "../../src/components/Form";
import { sleep, Theme } from '../../src/utils'

export default {
  title: 'Theming/Form'
};

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

  const onSubmit = submit => sleep(5000).then(() => {
    // fake a valid server response
    return Promise.resolve({
      status: 200,
      data: { message: 'Hello' }
    });
  })
  return <>
    <p className="mar-t-none">
      The "Saving..." spinner in forms can be customised using numerous long-winded
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
