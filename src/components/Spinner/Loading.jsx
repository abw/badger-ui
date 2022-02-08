import React from 'react'
import { Loader } from './Loader'

export const Loading = ({
  color,
  icon,
  textSize,
  message = 'Loading...',
  className = ''
}) =>
  <div className={`loader-buffer ${className}`}>
    <Loader color={color} icon={icon} textSize={textSize} message={message} />
  </div>

export default Loading
