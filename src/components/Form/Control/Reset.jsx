import React from 'react'
import Context from '../Context'
import FormButton from './FormButton'
import { Themed } from '../../../utils';

const ResetControl = ({ text = 'Reset', iconLeft = 'undo', form, ...props }) =>
  <FormButton {...props}
    type="reset"
    text={text}
    iconLeft={iconLeft}
    onClick={form.resetForm}
    submitting={form.submitting}
  />

export default Context.Consumer(
  Themed(ResetControl, 'FormReset')
)
