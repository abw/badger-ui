import React, { useEffect, useState } from 'react'
import DefaultLayout from './Layout'
import sort from './Sort'
import paginate from './Paginate'
import filter from './Filter'
import { extractVisibleColumns } from './Utils'
import { isDefined, Themed } from '../../utils'

const DataTable = ({
  rows=[],
  columns={},
  initialPageSize,
  Layout=DefaultLayout,
  ...props
}) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortReverse, setSortReverse] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({ });
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, _setPageSize] = useState(initialPageSize);
  const [page, setPage] = useState( () => paginate({rows, pageNo, pageSize}) );
  const [visibleColumns, setVisibleColumns] = useState( () => extractVisibleColumns(columns) );

  const setPageSize = size => {
    // set the page size
    _setPageSize(size);
    // always reset pageNo to 1 when pageSize changes
    setPageNo(1);
  }

  const toggleSortColumn = name => {
    if (sortColumn === name) {
      // toggle sort between ascending/descending
      setSortReverse(! sortReverse);
    }
    else {
      // set sort to new column and set ascending
      setSortColumn(name);
      setSortReverse(false);
    }
    // always reset pageNo to 1 when sort order changes
    setPageNo(1);
  }

  const setFilter = (name, value) => {
    let newFilters = { ...filters };

    if (isDefined(value) && value.length) {
      newFilters[name] = value;
    }
    else {
      delete newFilters[name];
    }
    //console.log("setFilter(%o, %o) => %o", name, value, newFilters);
    setFilters(newFilters);
    // always reset pageNo to 1 when filters change
    setPageNo(1);
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  }

  const setVisibleColumn = (name, value) => {
    const index = visibleColumns.indexOf(name);
    if (value) {
      if (index < 0) {
        setVisibleColumns([...visibleColumns, name]);
      }
    }
    else {
      if (index >= 0) {
        setVisibleColumns(visibleColumns.filter( item => item !== name ));
      }
    }
  }

  // changes to sortColumn, sortReverse, pageNo, pageSize or filters effect this
  // change after a debounce delay. rows are filtered, sorted, then paginated
  // useDebouncedEffect(
  useEffect(
    () => {
      // console.log('recomputing...');
      setPage(
        paginate({
          rows: sort({
            rows: filter({ rows, columns, filters }),
            columns, sortColumn, sortReverse
          }),
          pageNo,
          pageSize
        })
      );
    },
    [sortColumn, sortReverse, pageNo, pageSize, filters]
  );

  return <Layout
    rows={rows}
    columns={columns}
    page={page}
    sortColumn={sortColumn}
    sortReverse={sortReverse}
    visibleColumns={visibleColumns}
    setVisibleColumn={setVisibleColumn}
    toggleSortColumn={toggleSortColumn}
    filters={filters}
    setFilter={setFilter}
    showFilters={showFilters}
    toggleFilters={toggleFilters}
    setPageNo={setPageNo}
    setPageSize={setPageSize}
    {...props}
  />
}

DataTable.defaultProps = {
  initialPageSize: 10,
}

export default Themed(DataTable, 'DataTable');

