import React from 'react'
import Content from './Content.jsx';
import { classNames } from '../../utils/index.js'
import { Themed } from '../../utils/index.js';
import { NavLink as DefaultNavLink } from 'react-router-dom';

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
