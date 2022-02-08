import React from 'react'
import { Checkbox } from '../Checkbox'

export const Toggle = ({
  checkedIcon = 'toggle-on',
  uncheckedIcon = 'toggle-off',
  iconClass = 'large',
  ...props
}) =>
  <Checkbox
    {...props}
    checkedIcon={checkedIcon}
    uncheckedIcon={uncheckedIcon}
    iconClass={iconClass}
  />

export default Toggle
