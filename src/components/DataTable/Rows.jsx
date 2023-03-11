import React from 'react'
import Context from './Context.jsx'
import Row from './Row.jsx'

export const Rows = ({page, ...props}) =>
  <tbody>
    {page.rows.map(
      (row, n) => <Row key={row.id||n} row={row} {...props} />
    )}
  </tbody>

export default Context.Consumer(Rows)
