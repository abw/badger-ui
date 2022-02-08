import React from 'react'
import Context from '../Context'
import FormButton from './FormButton'

const ResetControl = ({ text = 'Reset', iconLeft = 'undo', form, ...props }) =>
  <FormButton {...props}
    type="reset"
    text={text}
    iconLeft={iconLeft}
    onClick={form.resetForm}
    submitting={form.submitting}
  />

export default Context.Consumer(ResetControl)
