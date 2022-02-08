export const stringField = (row, name) =>
  (row[name]||'').toString().toLowerCase()

export const numberField = (row, name) =>
  parseFloat(row[name]||0)

export const stringSort = name => (a, b) => {
  let c = stringField(a, name);
  let d = stringField(b, name);
  return c > d ? 1 : d > c ? -1 : 0;
}

export const numberSort = name => (a, b) => {
  return numberField(a, name) - numberField(b, name);
}

export const sortTypes = {
  string:  stringSort,
  text:    stringSort,
  number:  numberSort,
  integer: numberSort,
  price:   numberSort,
  pounds:  numberSort,
  id:      numberSort,
}

export const sort = ({rows, columns, sortColumn, sortReverse}) => {
  let sorted = [...rows];

  // console.log("sort() %s items by %s", sorted.length, sortColumn);

  if (sortColumn) {
    // default case is to use the column.type to determine how to sort
    // rows, via the mapping in sortTypes
    const column = columns[sortColumn] || { };
    const field  = column.field || sortColumn;
    const type   = column.type || 'text';
    const tsort  = sortTypes[type] || sortTypes.text;
    // column definition can override this with a custom sort function
    const sorter = column.sort || tsort(field);

    // sort rows
    sorted = sorted.sort(sorter);

    // reverse sorted rows
    if (sortReverse) {
      sorted = sorted.slice().reverse();
    }
  }
  return sorted;
}

export default sort
