import React from 'react'
import { CheckboxState } from '../Checkbox'

export const ToggleState = ({
  checkedIcon = 'toggle-on',
  uncheckedIcon = 'toggle-off',
  iconClass = 'large',
  ...props
}) =>
  <CheckboxState
    {...props}
    checkedIcon={checkedIcon}
    uncheckedIcon={uncheckedIcon}
    iconClass={iconClass}
  />

export default ToggleState
