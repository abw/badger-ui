import React from 'react';
import Button from '../../src/components/Button/Button.jsx';
import Icon from '../../src/components/Icon/Icon.jsx';
import { HorizontalSort, VerticalSort, Sortable } from '../../src/components/Sortable/index.jsx';

export default {
  title: 'Components/Sortable',
  component: VerticalSort,
}

export const Overview = () => <>
  <h1 className="mar-t-none mar-l-none">Sortable Elements</h1>
  <p className="intro">
    The <code className="code">Sortable</code> component is a wrapper
    around [dnd kit](https://dndkit.com/) for sorting items.
    The <code className="code">VerticalSort</code> and{' '}
    <code className="code">HorizontalSort</code> components are specialisations
    for vertical and horizontal sorting.
  </p>
</>

export const Sorting = () => {
  const rows = [
    { id: 100, forename: 'Alan',    surname: 'Aardvark' },
    { id: 101, forename: 'Brian',   surname: 'Badger' },
    { id: 102, forename: 'Colin',   surname: 'Camel' },
    { id: 103, forename: 'David',   surname: 'Dog' },
    { id: 104, forename: 'Edward',  surname: 'Elephant' },
    { id: 105, forename: 'Frank',   surname: 'Ferret' },
    { id: 106, forename: 'Gerald',  surname: 'Giraffe' },
    { id: 107, forename: 'Hector',  surname: 'Hedgehog' },
    { id: 108, forename: 'Ivan',    surname: 'Iguana' },
    { id: 109, forename: 'Jack',    surname: 'Jaguar' },
    { id: 110, forename: 'Kevin',   surname: 'Kangaroo' },
  ];
  const [changed, setChanged] = React.useState(false);
  const [items, setItems] = React.useState(rows);
  const setOrder = items => {
    setItems(items);
    setChanged(true);
  }
  const resetOrder = () => {
    setItems( rows.map( row => ({ ...row, moved: false }) ) );
    setChanged(false);
  }
  const Item = ({
    item, setNodeRef, style, listeners, ...props
  }) =>
    <div
      ref={setNodeRef} style={style}
      className={`sortable item mar shadow-1 ${item.moved ? 'moved' : ''}`}
      {...props}
      {...listeners}
    >
      <span className="pad-h">
        {item.forename} {item.surname}
      </span>
    </div>

  return (
    <>
      <div className="flex space">
        <h3 className="mar-t-none">Drag Items to Set Order</h3>
        { changed &&
          <div>
            <Button color="brown" text="Reset Order" iconLeft="undo" onClick={resetOrder}/>
          </div>
        }
      </div>
      <div className={`sortable list pad ${changed ? 'changed' : ''}`}>
        <Sortable
          items={items}
          Item={Item}
          setOrder={setOrder}
        />
      </div>
    </>
  )
}


export const HorizontalSorting = () => {
  const rows = [
    { id: 100, forename: 'Alan',    surname: 'Aardvark' },
    { id: 101, forename: 'Brian',   surname: 'Badger' },
    { id: 102, forename: 'Colin',   surname: 'Camel' },
    { id: 103, forename: 'David',   surname: 'Dog' },
  ];
  const [changed, setChanged] = React.useState(false);
  const [items, setItems] = React.useState(rows);
  const setOrder = items => {
    setItems(items);
    setChanged(true);
  }
  const resetOrder = () => {
    setItems( rows.map( row => ({ ...row, moved: false }) ) );
    setChanged(false);
  }
  const Item = ({
    item, setNodeRef, style, listeners, ...props
  }) =>
    <div
      ref={setNodeRef} style={style}
      className={`split-4 sortable item ${item.moved ? 'moved' : ''}`}
      {...props}
      {...listeners}
    >
      <div className="wide text-center">
        {item.forename} {item.surname}
      </div>
    </div>

  return (
    <>
      <div className="flex space">
        <h3 className="mar-t-none">Drag Items to Set Order</h3>
        { changed &&
          <div>
            <Button color="brown" text="Reset Order" iconLeft="undo" onClick={resetOrder}/>
          </div>
        }
      </div>
      <div className={`sortable list horizontal wide row ${changed ? 'changed' : ''}`}>
        <HorizontalSort
          items={items}
          Item={Item}
          setOrder={setOrder}
        />
      </div>
    </>
  )
}

export const VerticalSorting = () => {
  const rows = [
    { id: 100, forename: 'Alan',    surname: 'Aardvark' },
    { id: 101, forename: 'Brian',   surname: 'Badger' },
    { id: 102, forename: 'Colin',   surname: 'Camel' },
    { id: 103, forename: 'David',   surname: 'Dog' },
    { id: 104, forename: 'Edward',  surname: 'Elephant' },
    { id: 105, forename: 'Frank',   surname: 'Ferret' },
    { id: 106, forename: 'Gerald',  surname: 'Giraffe' },
    { id: 107, forename: 'Hector',  surname: 'Hedgehog' },
    { id: 108, forename: 'Ivan',    surname: 'Iguana' },
    { id: 109, forename: 'Jack',    surname: 'Jaguar' },
    { id: 110, forename: 'Kevin',   surname: 'Kangaroo' },
  ];
  const [changed, setChanged] = React.useState(false);
  const [items, setItems] = React.useState(rows);
  const setOrder = items => {
    setItems(items);
    setChanged(true);
  }
  const resetOrder = () => {
    setItems( rows.map( row => ({ ...row, moved: false }) ) );
    setChanged(false);
  }
  const Item = ({
    item, setNodeRef, style, listeners, ...props
  }) =>
    <div
      ref={setNodeRef} style={style}
      className={`wide sortable item row ${item.moved ? 'moved' : ''}`}
      {...props}
      {...listeners}
    >
      <div className="split-6 pad-l">
        {item.id}
      </div>
      <div className="split-3">
        {item.forename}
      </div>
      <div className="split-3">
        {item.surname}
      </div>
      <div className="split-6 text-right pad-r">
        <Icon name="sort" fixedWidth className=""/>
      </div>
    </div>

  return (
    <>
      <div className="flex space">
        <h3 className="mar-t-none">Drag Items to Set Order</h3>
        { changed &&
          <div>
            <Button color="brown" text="Reset Order" iconLeft="undo" onClick={resetOrder}/>
          </div>
        }
      </div>
      <div className={`sortable list vertical ${changed ? 'changed' : ''}`}>
        <VerticalSort
          items={items}
          Item={Item}
          setOrder={setOrder}
        />
      </div>
    </>
  )
}
