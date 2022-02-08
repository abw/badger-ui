import React from 'react'
import Context from '../Context'
import FormButton from './FormButton'

const SubmitControl = ({ text = 'Submit', iconRight = 'check', form, ...props }) =>
  <FormButton {...props}
    type="submit"
    text={text}
    iconRight={iconRight}
    onClick={form.submitForm}
    submitting={form.submitting}
  />

export default Context.Consumer(SubmitControl)

