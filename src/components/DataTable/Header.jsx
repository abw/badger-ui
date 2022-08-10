import React from 'react'
import Icon from '../Icon'
import { propClasses, preventDefault, Themed } from '../../utils'
import { capitalize } from '@abw/badger-utils'

const Header = ({
  name, column,
  sortColumn, sortReverse,
  toggleSortColumn, toggleFilters,
  filterIcon='filter',
  sortIcon='sort',
  sortUpIcon='sort-up',
  sortDownIcon='sort-down'
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
      ? (reverse ? sortUpIcon : sortDownIcon)
      : sortIcon;

    return <th className={classes} onClick={() => toggleSortColumn(name)}>
      <div>
        <span className="sort">
          <Icon name={icon} fixedWidth/>
        </span>
        <div className={`heading ${labelcs}`}>
          {column.label || capitalize(name)}
        </div>
        <span className="filter" onClick={preventDefault(toggleFilters)}>
          <Icon name={filterIcon} fixedWidth/>
        </span>
      </div>
    </th>
}

export default Themed(Header, 'DataTable');
