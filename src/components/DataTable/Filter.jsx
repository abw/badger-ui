import { hasValue } from '@abw/badger-utils';

export const filterStringExact = ({ value, search }) =>
  // we have to do woolly string searching because the value returned from a select
  // component is always a string
  hasValue(value)
    ? value.toString() === search.toString()
    : false;

export const filterStringContains = ({ value, search }) => {
  // more complicate string search that looks for all words in the input
  // anywhere in the string, e.g. "foo bar" should match against "bar and foo"
  const words  = search.toLowerCase().split(/\s+/);

  if (hasValue(value)) {
    const match = value.toString().toLowerCase();
    return words.every(
      word => match.indexOf(word) > -1
    );
  }
  else {
    return false;
  }
}

export const filterInteger = ({ value, search }) =>
  //console.log('filterInteger(%o, %o, %o) [%s][%o] == [%s][%o]', row, field, search, typeof match, match, typeof search, search);
  hasValue(value)
    ? (parseInt(value) === parseInt(search))
    : false;

export const filterFloat = ({value, search }) =>
  //console.log('filterFloat(%o, %o, %o) [%s][%o] == [%s][%o]', row, field, search, typeof match, match, typeof search, search);
  hasValue(value)
    ? (parseFloat(value) === parseFloat(search))
    : false;

export const filterBoolean = ({ value=false, search }) => {
  // the problem here is that a select input can't have options with true/false values, and
  // values of 0/1 get converted to strings.
  const bsrch = parseInt(search) !== 0;
  // console.log('filterBoolean [%o] vs [%o]', match, bsrch);
  return value === bsrch;
}

export const filterTypes = {
  string:  filterStringContains,
  text:    filterStringContains,
  number:  filterStringContains,
  price:   filterStringContains,
  pounds:  filterStringContains,
  select:  filterStringExact,
  boolean: filterBoolean,
  integer: filterInteger,
  float:   filterFloat,
}

export const filter = ({rows, columns, filters}) => {
  const fkeys = Object.keys(filters);

  // console.log("filtering: %s rows with ", rows.length, filters);

  if (fkeys.length === 0) {
    return rows;
  }

  return rows.filter(
    row => fkeys.every(
      fkey => {
        const search = filters[fkey];
        const column = columns[fkey];
        const field  = column.field || fkey;
        const value  = row[field];
        const type   = column.filterType || column.type;
        const filter = column.filter || filterTypes[type] || filterTypes.text;
        if (hasValue(search) && search.length) {
          return filter({ row, field, value, search })
        }
        else {
          // if there is no search term then all rows match
          return true;
        }
      }
    )
  )
}

export default filter;
