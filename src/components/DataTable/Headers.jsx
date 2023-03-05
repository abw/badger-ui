import React from 'react'
import Context from './Context'
import Header from './Header'
import { Filter } from './Filters'

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
