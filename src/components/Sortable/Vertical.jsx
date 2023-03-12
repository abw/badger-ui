import React from 'react'
import Sortable from './Sortable.jsx';
import { verticalListSortingStrategy, } from '@dnd-kit/sortable';
import { restrictToParentElement, restrictToVerticalAxis, restrictToWindowEdges } from '@dnd-kit/modifiers';

export const VerticalSort = ({...props}) =>
  <Sortable
    modifiers={[restrictToVerticalAxis, restrictToWindowEdges, restrictToParentElement]}
    strategy={verticalListSortingStrategy}
    {...props}
  />

export default VerticalSort
