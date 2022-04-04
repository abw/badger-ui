import React from 'react'
import Icon from '../Icon'
import { classNames, Themed } from '../../utils'

const Revealable = ({
  revealedIcon,
  unrevealedIcon,
  initiallyRevealed = false,
  revealable = true,
  headClass = '',
  bodyClass = '',
  iconLeftClass = '',
  iconRightClass = '',
  ...props
}) => {
  const [revealed, setRevealed] = React.useState(initiallyRevealed);
  const toggle = () => {
    if (revealable) {
      setRevealed(!revealed);
    }
  }
  const { title, iconLeft, iconRight } = props;

  return <div className={classNames(props, 'revealable', revealed ? 'revealed' : '')} id={props.id}>
    <div className={`head ${headClass}`} onClick={toggle}>
      {iconLeft && <Icon icon={iconLeft} fixedWidth className={`on-left ${iconLeftClass}`} />}
      <Icon icon={revealed ? revealedIcon : unrevealedIcon} fixedWidth />
      {title}
      {iconRight && <Icon icon={iconRight} fixedWidth className={`on-right ${iconRightClass}`} />}
    </div>
    {revealed &&
      <div className={`body ${bodyClass}`}>
        {props.children}
      </div>
    }
  </div>
}

Revealable.defaultProps = {
  revealedIcon:   'caret-down',
  unrevealedIcon: 'caret-right',
}

export default Themed(Revealable, 'Revealable')
