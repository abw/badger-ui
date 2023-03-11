import React from 'react'
import Context from './Context.jsx'
import Header from './Header.jsx'
import { Filter } from './Filters.jsx'

export const Headers = ({
  columns,
  visibleColumns,
  showFilters,
  ...props
}) =>
  <thead>
    <tr className="headings">
      { visibleColumns.map(
        name => <Header
          key={name}
          name={name}
          column={columns[name]}
          {...props}
        />
      )}
    </tr>
    { showFilters
      ? <tr className="filters">
          { visibleColumns.map(
            name => <Filter
              key={name}
              name={name}
              column={columns[name]}
              {...props}
            />
          )}
        </tr>
      : null
    }
  </thead>

export default Context.Consumer(Headers)
