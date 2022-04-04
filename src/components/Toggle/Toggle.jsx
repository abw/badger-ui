import React from 'react'
import { Checkbox } from '../Checkbox'
import { Themed } from '../../utils'

const Toggle = props =>
  <Checkbox {...props}/>

Toggle.defaultProps = {
  checkedIcon:   'toggle-on',
  uncheckedIcon: 'toggle-off',
  iconClass:     'large'
};

export default Themed(Toggle, 'Toggle')
