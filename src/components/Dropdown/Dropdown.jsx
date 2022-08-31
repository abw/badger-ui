import React from 'react'
import DefaultTrigger from './Trigger'
import { classNames, Themed } from '../../utils';

const Dropdown = ({
  right, border,
  clicked, setClicked,
  children,
  contentClass='',
  Trigger=DefaultTrigger,
  hoverOpen=true,
  clickOpen=false,
  ...props
}) => {
  const [clickedOpen, setClickedOpen] = React.useState(false);
  const cname = classNames(
    props,
    'dropdown', right ? 'right' : '',
    border ? 'border' : '',
    clicked ? 'clicked' : '',
    clickedOpen ? 'open' : hoverOpen ? '' : 'closed',
  );
  return <div className={cname}>
    <div className="trigger" onMouseEnter={setClicked ? () => setClicked(0) : null}>
      <Trigger {...props} onClick={clickOpen ? () => setClickedOpen(! clickedOpen) : null}/>
    </div>
    <div className={`content ${contentClass}`}>
      {children}
    </div>
  </div>
}

Dropdown.defaultProps = {
  iconRight: 'caret-down',
};

export default Themed(Dropdown, 'Dropdown');
