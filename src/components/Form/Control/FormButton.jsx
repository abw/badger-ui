import React from 'react'
import Button from '../../Button'

const FormButton = ({
  submitting,
  disabled=submitting,
  ...props
}) =>
  <Button {...props} disabled={disabled}/>

export default FormButton
