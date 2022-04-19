import React from 'react'
import DefaultTrigger from './Trigger'
import { Button } from '../Button'
import { classNames, Themed } from '../../utils';

const Dropdown = ({
  right, border,
  clicked, setClicked,
  children,
  Trigger=DefaultTrigger,
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
      <Trigger {...props}/>
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
