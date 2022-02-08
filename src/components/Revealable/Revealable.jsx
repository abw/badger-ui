import React from 'react'
import Icon from '../Icon'
import { classNames } from '../../utils'

export const Revealable = ({
  initiallyRevealed = false,
  revealedIcon = 'caret-down',
  unrevealedIcon = 'caret-right',
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

export default Revealable
