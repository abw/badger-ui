import React from 'react'
import Cell from './Cell.jsx'

export const Row = ({
  row,
  rowClass,
  columns,
  visibleColumns,
  ...props
}) =>
  <tr className={rowClass ? rowClass(row) : ''}>
    { visibleColumns.map(
      name => {
        const column = columns[name];
        const field  = column.field || name;
        const value  = row[field];
        return <Cell
          key={name}
          row={row}
          name={name}
          field={field}
          column={column}
          value={value}
          {...props}
        />
      }
    )}
  </tr>

export default Row
