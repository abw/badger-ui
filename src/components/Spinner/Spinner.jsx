import React from 'react'
import { Themed } from '../../utils';
import { Icon, Icons } from '../Icon'

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
