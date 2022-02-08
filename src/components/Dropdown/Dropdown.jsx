import React from 'react'
import { Button } from '../Button'
import { classNames } from '../../utils';

export const Dropdown = ({
  right, border,
  clicked, setClicked,
  children,
  iconRight = 'caret-down',
  iconLeft,
  text,
  ...props
}) => {
  const cname = classNames(
    props,
    'dropdown', right ? 'right' : '',
    border ? 'border' : '',
    clicked ? 'clicked' : ''
  );
  return <div className={cname}>
    <div className="trigger" onMouseEnter={setClicked ? () => setClicked(0) : null}>
      <Button
        color={props.color}
        solid={props.solid}
        className={props.buttonClass}
        iconLeft={iconLeft}
        iconRight={iconRight}
        text={text}
      />
    </div>
    <div className="content">
      {children}
    </div>
  </div>
}

export default Dropdown
