import React from 'react'
import { Checkbox } from '../Checkbox/index.jsx'
import { Themed } from '../../utils/index.js'

const Toggle = props =>
  <Checkbox {...props}/>

Toggle.defaultProps = {
  checkedIcon:   'toggle-on',
  uncheckedIcon: 'toggle-off',
  iconClass:     'large'
};

export default Themed(Toggle, 'Toggle')
