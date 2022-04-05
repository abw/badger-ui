import React from 'react'
import { Button } from '../Button'
import { classNames, Themed } from '../../utils';

const Dropdown = ({
  right, border,
  clicked, setClicked,
  children,
  iconRight,
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

Dropdown.defaultProps = {
  iconRight: 'caret-down',
};

export default Themed(Dropdown, 'Dropdown');
// export default Themed(Dropdown, 'Dropdown');
