import React from 'react'
import Context from '../Context.jsx'
import FormButton from './FormButton.jsx'
import { Themed } from '../../../utils/index.js';

const SubmitControl = ({
  text='Submit',
  iconRight='check',
  color='blue',
  form,
  ...props
}) =>
  <FormButton {...props}
    type="submit"
    text={text}
    color={color}
    iconRight={iconRight}
    onClick={form.submitForm}
    submitting={form.submitting}
  />

export default Context.Consumer(
  Themed(SubmitControl, 'FormSubmit')
)

