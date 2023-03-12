import React from 'react';
import Context from './Context.jsx'
import Dropdown from '../Dropdown/index.jsx'
import Checkbox from '../Checkbox/index.jsx'
import Icon from '../Icon/index.jsx';
import { VerticalSort } from '../Sortable/index.jsx'
import { capitalize } from '@abw/badger-utils'

export const FieldSelect = ({
  columns,
  visibleColumns,
  setVisibleColumn,
  setColumnOrder,
  solidButtons,
  dropdownColor
}) =>
  <VerticalSort
    items={Object.keys(columns).map( id => ({ id }) )}
    Item={Item}
    List={List}
    columns={columns}
    visibleColumns={visibleColumns}
    setVisibleColumn={setVisibleColumn}
    solidButtons={solidButtons}
    setOrder={items => setColumnOrder(items.map( item => item.id ) )}
    dropdownColor={dropdownColor}
  />

const List = ({children, solidButtons, dropdownColor}) =>
  <Dropdown
    text="Fields" right className="mar-r"
    solid={solidButtons} color={dropdownColor}
    clickOpen
  >
    <div className="menu pad pad-b-none">
      {children}
    </div>
  </Dropdown>

const Item = ({
  item, setNodeRef, style, listeners,
  columns, visibleColumns, setVisibleColumn,
}) =>
  <div
    ref={setNodeRef} style={style}
    className={`wide row ${item.moved ? 'moved' : ''}`}
  >
    <Checkbox
      className="wide"
      value={visibleColumns.indexOf(item.id) >= 0}
      onChange={checked => setVisibleColumn(item.id, checked)}
      text={
        <div className="flex space">
          <span>{columns[item.id].about||columns[item.id].label||capitalize(item.id)}</span>
          <span {...listeners} className="sort-grip"><Icon name="grip-vertical"/></span>
        </div>
      }
    />
  </div>

export default Context.Consumer(
  FieldSelect
)
