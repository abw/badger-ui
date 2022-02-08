import React from 'react'
import Row from './Row'

export const Rows = ({page, ...props}) =>
  <tbody>
    {page.rows.map(
      (row, n) => <Row key={row.id||n} row={row} {...props} />
    )}
  </tbody>

export default Rows;
