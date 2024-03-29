import React from 'react'
import Button from './Button.jsx'
import { classNames, Themed } from '../../utils/index.js'

const Buttons = (props) =>
  <div className={`${classNames(props, 'buttons')}`}>
    {props.buttons.map(
      (button, n) => <Button
        key={n}
        color={props.color}
        solid={props.solid}
        shade={props.shade}
        round={props.round}
        gradient={props.gradient}
        {...button}
        last={n === props.buttons.length - 1}
      />
    )}
  </div>

Buttons.defaultProps = {
  solid: false,
};

export default Themed(Buttons, 'Buttons')
