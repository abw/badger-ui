import React from 'react'
import Generator from '@abw/react-context-generator'
import { bindHandlers, addDebug, isDefined, Storage } from '../../utils'
import { extractVisibleColumns } from './Utils'
import paginate from './Paginate'
import sort from './Sort'
import filter from './Filter'

const State = {
  sortColumn:  null,
  sortReverse: false,
  showFilters: false,
  pageNo:      1,
  pageSize:    10,
  rows:        [ ],
  filters:     { },
};

class Context extends React.Component {
  constructor(props) {
    super(props);

    const pageNo   = props.pageNo   || props.initialPageNo   || State.pageNo;
    const pageSize = props.pageSize || props.initialPageSize || State.pageSize;
    let state = {
      ...State,
      pageNo,
      pageSize,
      visibleColumns: extractVisibleColumns(props.columns),
    };

    // add a debugging function if debug property is set
    addDebug(this, props.debug);

    // pull any saved options out of storage
    if (this.props.storageKey) {
      this.store = Storage(this.props.storageKey);
      state = this.store.load(state);
      this.debug("loaded state from storage: ", state);
    }
    // prepare data and set the initial state
    this.state = this.prepareState({
      ...state,
      rows: props.rows,
      columns: props.columns,
    });
    this.handlers = bindHandlers(
      this,
      'setPageNo setPageSize setVisibleColumn toggleSortColumn setSortReverse setFilter toggleFilters'
    );
  }

  //-----------------------------------------------------------------------------
  // Internal methods for setting options
  //-----------------------------------------------------------------------------
  prepareState(props) {
    // catch any changes to filtering, sorting or paging options so that
    // we can repaginate
    const state = { ...this.state, ...props };
    const { rows, columns, filters, sortColumn, sortReverse, pageNo, pageSize } = state;
    state.page = paginate({
      rows: sort({
        rows: filter({ rows, columns, filters }),
        columns, sortColumn, sortReverse
      }),
      pageNo,
      pageSize
    });
    return state;
  }

  set(props) {
    // update state
    this.setState(this.prepareState(props));

    // save any changes into local storage
    if (this.store) {
        this.debug("saving state to storage: ", props);
        this.store.save(props);
    }
  }

  //-----------------------------------------------------------------------------
  // Externals methods for setting state
  //-----------------------------------------------------------------------------
  setPageNo(pageNo) {
    // set the page number
    this.set({
      pageNo,
    });
  }

  setPageSize(pageSize) {
    // set the page size
    // always reset pageNo to 1 when pageSize changes
    this.set({
      pageSize,
      pageNo: 1
    });
  }

  setVisibleColumn(name, value) {
    // toggle the visibility of a column
    const visible = this.state.visibleColumns;
    const index   = visible.indexOf(name);
    if (value) {
      if (index < 0) {
        this.set({
          visibleColumns: [...visible, name]
        })
      }
    }
    else {
      if (index >= 0) {
        this.set({
          visibleColumns: visible.filter( item => item !== name )
        })
      }
    }
  }

  toggleSortColumn(sortColumn) {
    if (sortColumn === this.state.sortColumn) {
      // toggle sort between ascending/descending
      this.set({
        sortReverse: ! this.state.sortReverse,
        pageNo: 1
      })
    }
    else {
      // set sort to new column and set ascending
      this.set({
        sortColumn,
        sortReverse: false,
        pageNo: 1,
      })
    }
  }

  setSortReverse(sortReverse) {
    // toggle sort between ascending/descending
    this.set({ sortReverse })
  }

  setFilter(name, value) {
    let newFilters = { ...this.state.filters };

    if (isDefined(value) && value.length) {
      newFilters[name] = value;
    }
    else {
      delete newFilters[name];
    }
    this.set({
      filters: newFilters,
      pageNo: 1
    });
  }

  toggleFilters = () => {
    // Do we actually need to call set and force pagination?  No, but we
    // might want to persist all options in local storage and the set()
    // method would be a good place to put that.
    this.set({
      showFilters: ! this.state.showFilters
    });
  }

  //-----------------------------------------------------------------------------
  // render
  //-----------------------------------------------------------------------------
  render() {
    const dataTable = {
      ...this.props,
      ...this.state,
      ...this.handlers
    };
    // call the render prop passing a dataTable object containing
    // all the properties for this component, all the state,
    // and all of the callable handler functions.
    return this.props.render(dataTable);
  }
}

export default Generator(Context)

