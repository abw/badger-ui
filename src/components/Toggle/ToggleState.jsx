import React from 'react'
import { CheckboxState } from '../Checkbox/index.jsx'
import { Themed } from '../../utils/index.js'

const ToggleState = props =>
  <CheckboxState {...props}/>

ToggleState.defaultProps = {
  checkedIcon:   'toggle-on',
  uncheckedIcon: 'toggle-off',
  iconClass:     'large'
};

export default Themed(ToggleState, 'Toggle')
