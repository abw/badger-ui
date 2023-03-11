import React from 'react'
import Icon from '../Icon/index.jsx'
import { classNames } from '../../utils/index.js'

export const Label = (props) => <span
  className={classNames(props, 'label')}
  onClick={props.onClick}>
  {props.iconLeft && <Icon icon={props.iconLeft} className="on-left" />}
  <span className="caption">{props.children || props.text}</span>
  {props.iconRight && <Icon icon={props.iconRight} className="on-right" />}
</span>

export default Label
