import React from 'react'
import Sortable from './Sortable.jsx';
import { horizontalListSortingStrategy, } from '@dnd-kit/sortable';
import { restrictToHorizontalAxis, restrictToParentElement, restrictToWindowEdges } from '@dnd-kit/modifiers';

export const HorizontalSort = ({...props}) =>
  <Sortable
    modifiers={[restrictToHorizontalAxis, restrictToWindowEdges, restrictToParentElement]}
    strategy={horizontalListSortingStrategy}
    {...props}
  />

export default HorizontalSort
