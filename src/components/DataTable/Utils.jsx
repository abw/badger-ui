export const extractVisibleColumns = columns =>
  Object.keys(columns).filter( column => ! columns[column].hidden )

