import React from 'react'
import Context from '../Context'
import FormButton from './FormButton'
import { Themed } from '../../../utils';

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
