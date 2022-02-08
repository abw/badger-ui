import React from 'react'
import { Overlay } from '../Overlay'
import { Spinner } from './Spinner'

export const Loader = ({
  message, color, bgColor, overlayColor, icon,
  className = '', textSize = 'larger', size = 'fa-4x'
}) =>
  <Overlay color={overlayColor} className={className}>
    <div className="middle">
      <Spinner size={size} icon={icon} color={color} bgColor={bgColor} />
      <div className={`caption mar-2 ${textSize}`}>{message}</div>
    </div>
  </Overlay>

export default Loader
