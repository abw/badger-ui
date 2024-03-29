import React from 'react'
import { Icon } from '../../Icon/index.jsx'

export const Required = ({field}) =>
  <span className="required">
    <Icon name={field.valid ? 'check' : field.invalid ? 'warning' : 'asterisk'}/>
    required
  </span>

export default Required
