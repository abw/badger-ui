import React from 'react'
import { Icon, Icons } from '../Icon'

export const Spinner = ({
  size,
  icon = 'cog',
  color = 'yellow',
  bgColor = 'black'
}) =>
  <Icons className={size}>
    <Icon name="circle" className={bgColor} transform="grow-6" />
    <Icon name={icon} color={color} spin />
  </Icons>

export default Spinner
