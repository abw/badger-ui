import React from 'react'
import { Debug } from './Debug'

export const Todo = ({
  title = 'Todo',
  icon = 'clipboard-list',
  className = '',
  text,
  children
}) =>
  <Debug title={title} className={className} icon={icon}>
    {text || children || 'This is TODO'}
  </Debug>

export default Todo
