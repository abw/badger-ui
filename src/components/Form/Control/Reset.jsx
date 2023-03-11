import React from 'react'
import Context from '../Context.jsx'
import FormButton from './FormButton.jsx'
import { Themed } from '../../../utils/index.js';

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
