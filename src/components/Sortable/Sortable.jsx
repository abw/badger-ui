import React from 'react'
import { CSS } from '@dnd-kit/utilities';
import {
  DndContext, closestCenter,
  KeyboardSensor, PointerSensor,
  useSensor, useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable
} from '@dnd-kit/sortable';
import { restrictToParentElement } from '@dnd-kit/modifiers';


export const Sortable = ({
  items,
  setOrder,
  List=({children}) => children,
  Item,
  modifiers=[restrictToParentElement],
  strategy=rectSortingStrategy,
  ...props
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  function handleDragEnd(event) {
    const {active, over} = event;
    if (active.id !== over.id) {
      const oldIndex = items.findIndex( item => item.id === active.id );
      const newIndex = items.findIndex( item => item.id === over.id );
      items[oldIndex].moved = true;
      setOrder(arrayMove(items, oldIndex, newIndex));
    }
  }
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={modifiers}
    >
      <SortableContext
        items={items}
        strategy={strategy}
      >
        <List {...props}>
          { items.map(
            item => <SortableItem
              key={item.id}
              id={item.id}
              item={item}
              Item={Item}
              {...props}
            />
          )}
        </List>
      </SortableContext>
    </DndContext>
  )
}

const SortableItem = ({id, item, Item, ...props}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id});
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return <Item
    item={item}
    setNodeRef={setNodeRef}
    style={style}
    listeners={listeners}
    {...attributes}
    {...props}
  />
}

export default Sortable