import React from 'react'
import { NavLink } from 'react-router-dom';
import { classNames } from '../../utils'
import { Icon } from '../Icon'

export const LinkItem = (props, ref) =>
  <NavLink
    to={props.to}
    onClick={props.onClick}
    end={props.exact && 'end'}
    className={({ isActive }) => classNames(props, isActive ? 'active' : null)}
    aria-label={props.label}
    ref={ref}
  >
    {props.icon &&
      <Icon icon={props.icon} />
    }
    {props.iconLeft &&
      <Icon icon={props.iconLeft} fixedWidth className={`left on-left ${props.iconLeftClass || ''}`} />
    }
    {props.bare
      ? props.text || props.children
      : <span className="text">{props.text || props.children}</span>
    }
    {props.iconRight &&
      <Icon icon={props.iconRight} fixedWidth className={`right on-right ${props.iconRightClass || ''}`} />
    }
  </NavLink>

export const Link = React.forwardRef(LinkItem)

export default Link
