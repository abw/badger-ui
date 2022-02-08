import React from 'react'
import classNames from '../../utils/classNames'
import Button from './Button'

export const Buttons = (props) =>
  <div className={`${classNames(props, 'buttons')}`}>
    {props.buttons.map(
      (button, n) => <Button key={n} solid={props.solid} {...button} last={n === props.buttons.length - 1} />
    )}
  </div>

export default Buttons
