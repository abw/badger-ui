import React from 'react'
import Icon from '../Icon'
import classNames from '../../utils/classNames'

export const Label = (props) => <span
  className={classNames(props, 'label')}
  onClick={props.onClick}>
  {props.iconLeft && <Icon icon={props.iconLeft} className="on-left" />}
  <span className="caption">{props.children || props.text}</span>
  {props.iconRight && <Icon icon={props.iconRight} className="on-right" />}
</span>

export default Label
