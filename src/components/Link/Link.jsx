import React from 'react'
import Content from './Content.jsx';
import { NavLink as DefaultNavLink } from 'react-router-dom';
import { classNames } from '../../utils'
import { Themed } from '../../utils';

const Link = (
  {
    NavLink=DefaultNavLink,
    ...props
  },
  ref
) =>
  <NavLink
    to={props.to}
    onClick={props.onClick}
    end={props.exact && 'end'}
    className={({ isActive }) => classNames(props, isActive ? 'active' : null)}
    aria-label={props.label}
    ref={ref}
  >
    <Content {...props}/>
  </NavLink>

export default Themed(
  React.forwardRef(Link),
  'Link'
);
