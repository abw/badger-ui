import React from 'react'
import { Themed } from '../../utils/index.js';
import { Icon, Icons } from '../Icon/index.jsx'

const Spinner = ({
  size,
  icon,
  color,
  transform,
  bgColor,
  bgIcon,
  bgTransform
}) =>
  <Icons className={size}>
    <Icon name={bgIcon} color={bgColor} transform={bgTransform} />
    <Icon name={icon} color={color} spin transform={transform} />
  </Icons>

Spinner.defaultProps = {
  icon:         'cog',
  color:        'yellow',
  bgColor:      'black',
  bgIcon:       'circle',
  bgTransform:  'grow-6',
};

export default Themed(Spinner, 'Spinner')
