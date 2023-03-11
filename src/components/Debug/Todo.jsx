import React from 'react'
import { Themed } from '../../utils/index.js';
import Debug from './Debug.jsx'

const Todo = ({
  title,
  icon,
  className = '',
  text,
  children,
  fallback
}) =>
  <Debug title={title} className={className} icon={icon}>
    {text || children || fallback}
  </Debug>

Todo.defaultProps = {
  title:    'Todo',
  icon:     'clipboard-list',
  fallback: 'This is TODO',
};

export default Themed(Todo, 'Todo')
