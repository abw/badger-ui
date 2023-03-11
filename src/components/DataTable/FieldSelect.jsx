import React from 'react';
import Context from './Context.jsx'
import Dropdown from '../Dropdown/index.jsx'
import Checkbox from '../Checkbox/index.jsx'
import Icon from '../Icon/index.jsx';
import { capitalize } from '@abw/badger-utils'
import { CSS } from '@dnd-kit/utilities';
import {
  DndContext, closestCenter,
  KeyboardSensor, PointerSensor,
  useSensor, useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from '@dnd-kit/modifiers';


export const FieldSelect = ({
  columns,
  visibleColumns,
  setVisibleColumn,
  setColumnOrder,
  solidButtons,
  dropdownColor
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const {active, over} = event;
    const names = Object.keys(columns);
    if (active.id !== over.id) {
      const oldIndex = names.indexOf(active.id);
      const newIndex = names.indexOf(over.id);
      const order = arrayMove(names, oldIndex, newIndex);
      setColumnOrder(order);
    }
  }

  return <DndContext
    sensors={sensors}
    collisionDetection={closestCenter}
    onDragEnd={handleDragEnd}
    modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
  >
    <SortableContext
      items={Object.keys(columns)}
      strategy={verticalListSortingStrategy}
    >
      <Dropdown
        text="Fields" right className="mar-r"
        solid={solidButtons} color={dropdownColor}
        clickOpen
      >
        <div className="menu pad pad-b-none">
          { Object.keys(columns).map(id =>
            <SortableItem
              key={id} id={id} columns={columns}
              visibleColumns={visibleColumns}
              setVisibleColumn={setVisibleColumn}
            />
          )}
        </div>
      </Dropdown>
    </SortableContext>
  </DndContext>
}

export function SortableItem({ id, columns, visibleColumns, setVisibleColumn }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id});
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <Checkbox
        className="wide"
        value={visibleColumns.indexOf(id) >= 0}
        onChange={checked => setVisibleColumn(id, checked)}
        text={
          <div className="flex space">
            <span>{columns[id].about||columns[id].label||capitalize(id)}</span>
            <span {...listeners} className="sort-grip"><Icon name="grip-vertical"/></span>
          </div>
        }
      />
    </div>
  );
}

export default Context.Consumer(
  FieldSelect
)
