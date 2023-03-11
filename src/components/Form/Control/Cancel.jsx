import React from 'react'
import Context from '../Context.jsx'
import FormButton from './FormButton.jsx'
import { Themed } from '../../../utils/index.js';

const CancelControl = ({
  text='Cancel',
  iconLeft='arrow-left',
  color='grey',
  onClick,
  form,
  ...props
}) =>
  <FormButton {...props}
    text={text}
    color={color}
    iconLeft={iconLeft}
    onClick={onClick}
    submitting={form.submitting}
    tabIndex={-1}
  />

export default Context.Consumer(
  Themed(CancelControl, 'FormCancel')
)
