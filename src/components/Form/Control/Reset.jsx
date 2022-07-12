import React from 'react'
import Context from '../Context'
import FormButton from './FormButton'
import { Themed } from '../../../utils';

const ResetControl = ({
  text='Reset',
  iconLeft='undo',
  color='brown',
  form,
  ...props
}) =>
  <FormButton {...props}
    type="reset"
    text={text}
    color={color}
    iconLeft={iconLeft}
    onClick={form.resetForm}
    submitting={form.submitting}
    tabIndex={-1}
  />

export default Context.Consumer(
  Themed(ResetControl, 'FormReset')
)
