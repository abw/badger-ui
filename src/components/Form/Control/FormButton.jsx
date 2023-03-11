import React from 'react'
import Button from '../../Button/index.jsx'

const FormButton = ({
  submitting,
  disabled=submitting,
  ...props
}) =>
  <Button {...props} disabled={disabled}/>

export default FormButton
