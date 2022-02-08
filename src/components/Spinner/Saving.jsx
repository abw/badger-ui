import React from 'react'
import { Loading } from './Loading'

export const Saving = ({
  color = 'orange',
  message = 'Saving...',
  ...props
}) =>
  <Loading color={color} message={message} {...props} />


export default Saving
