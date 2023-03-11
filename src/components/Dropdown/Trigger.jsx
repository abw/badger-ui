import React from 'react'
import { Button } from '../Button/index.jsx'

export const Trigger = ({
  color, solid, buttonClass,
  iconLeft, iconRight,
  text,
  onClick
}) =>
  <Button
    color={color}
    solid={solid}
    className={buttonClass}
    iconLeft={iconLeft}
    iconRight={iconRight}
    text={text}
    onClick={onClick}
  />

export default Trigger;
