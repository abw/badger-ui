import React from 'react'
import { propClasses } from '../../utils'
import displayTypes from './Display'

export const Cell = ({
  row, column, name, field, value, rowClick,
  sortColumn
}) => {
    const type    = column.type    || 'text';
    const Display = column.display || displayTypes[type] || displayTypes.default;
    const sorting = sortColumn === name;
    const classes = propClasses({ sorting }, type, column.bodyClass, column.className);
    return <td className={classes} onClick={rowClick ? () => rowClick(row) : () => null}>
      <Display row={row} column={column} name={name} field={field} value={value}/>
    </td>
}

export default Cell
