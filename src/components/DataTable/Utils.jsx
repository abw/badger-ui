export const extractVisibleColumns = columns =>
  Object.keys(columns).filter( column => ! columns[column].hidden )

/*
export const extractVisibleColumns = columns => {
  let visible = { };
  Object.keys(columns).forEach(
    column => visible[column] = columns[column].visible
  )
  return visible;
}
*/
