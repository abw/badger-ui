import React from 'react'
import Icon from './Icon'
import Icons from './Icons'

export const IconStack = (props) => <Icons className={props.className}>
  <Icon icon={props.backIcon} color={props.backColor} transform={props.backTransform} />
  <Icon icon={props.foreIcon} color={props.foreColor} transform={props.foreTransform} spin={props.spin} />
</Icons>

export default IconStack
