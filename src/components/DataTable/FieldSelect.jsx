import React from 'react'
import Context from './Context'
import { capitalize } from '@abw/badger-utils'
import { Checkbox } from '../Checkbox'
import { Dropdown } from '../Dropdown'

export const FieldSelect = ({
  columns,
  visibleColumns,
  setVisibleColumn,
  solidButtons,
  dropdownColor
}) =>
  <Dropdown
    text="Fields" right className="mar-r"
    solid={solidButtons} color={dropdownColor}
  >
    <div className="menu pad pad-b-none">
      { Object.keys(columns).map(
          name => <Checkbox
            key={name} className="wide"
            text={columns[name].about||columns[name].label||capitalize(name)}
            value={visibleColumns.indexOf(name) >= 0}
            onChange={checked => setVisibleColumn(name, checked)}
          />
      )}
    </div>
  </Dropdown>

export default Context.Consumer(
  FieldSelect
)
