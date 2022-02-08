import React from 'react'
import Icon from '../Icon'
import { propClasses, preventDefault, capitalize } from '../../utils'

export const Header = ({
  name, column,
  sortColumn, sortReverse, toggleSortColumn,
  toggleFilters
}) => {
    const type    = column.type || 'text';
    const sorting = sortColumn === name;
    const reverse = sorting && sortReverse;
    const labelcs = propClasses(
      { }, type, column.className, column.headClass
    );
    const classes = propClasses(
      {sorting, reverse}, type
    );
    const icon = sorting
      ? (reverse ? 'sort-up' : 'sort-down')
      : 'sort';

    return <th className={classes} onClick={() => toggleSortColumn(name)}>
      <div>
        <span className="sort">
          <Icon name={icon} fixedWidth/>
        </span>
        <div className={`heading ${labelcs}`}>
          {column.label || capitalize(name)}
        </div>
        <span className="filter" onClick={preventDefault(toggleFilters)}>
          <Icon name="filter" fixedWidth/>
        </span>
      </div>
    </th>
}

export default Header
