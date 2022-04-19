import React from 'react'
import { Button } from '../Button'
import { Themed } from '../../utils';

const Trigger = ({
  color, solid, buttonClass,
  iconLeft, iconRight,
  text,
}) =>
  <Button
    color={color}
    solid={solid}
    className={buttonClass}
    iconLeft={iconLeft}
    iconRight={iconRight}
    text={text}
  />

export default Themed(Trigger, 'DropdownTrigger');
