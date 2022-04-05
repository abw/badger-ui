import React from 'react'
import { propClasses, isDefined, Themed } from '../../utils'
import Icon from '../Icon'

export const TextFilter = ({name, value, setFilter}) =>
  <input
    className="text input"
    value={value||''}
    onChange={e => setFilter(name, e.target.value)}
  />

/*
export const SelectFilter = ({name, value, setFilter}) => {
  return <select onChange={(e) => setFilter(name, e.target.value, e.target[e.target.selectedIndex].text)} value={isDefined(value) ? value : ""}>
    { column.options.map(
        option => <option key={option.value} value={option.value}>{option.text}</option>
    )}
  </select>
}
*/

export const BoolFilter = ({name, value, setFilter}) =>
  <select onChange={e => setFilter(name, e.target.value)} value={isDefined(value) ? value : ''}>
    <option value="">Yes or No</option>
    <option value="1">Yes</option>
    <option value="0">No</option>
  </select>

export const filterTypes = {
  text:    TextFilter,
  boolean: BoolFilter,
//  select: SelectFilter,
}

export const Filter = Themed(
  ({
    name, column, filters, sortColumn,
    clearFilterIcon='times-circle',
    ...props
  }) => {
    const type      = column.filterType || column.type || 'text';
    const sorting   = sortColumn === name;
    const filtering = filters[name];
    const classes   = propClasses({ filtering, sorting }, type, 'filter');
    const Filter    = filterTypes[type] || filterTypes.text;
    return <th className={classes}>
      <div>
        <div className="filter">
          <Filter
            name={name}
            column={column}
            value={filtering}
            {...props}
          />
        </div>
        <Icon
          name={clearFilterIcon}
          className="clear-filter"
          onClick={() => props.setFilter(name, undefined)}
        />
      </div>
    </th>
  },
  'DataTable'
)
