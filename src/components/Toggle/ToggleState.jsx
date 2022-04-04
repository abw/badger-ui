import React from 'react'
import { CheckboxState } from '../Checkbox'
import { Themed } from '../../utils'

const ToggleState = props =>
  <CheckboxState {...props}/>

ToggleState.defaultProps = {
  checkedIcon:   'toggle-on',
  uncheckedIcon: 'toggle-off',
  iconClass:     'large'
};

export default Themed(ToggleState, 'Toggle')
