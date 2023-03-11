import React from 'react'
import Headers from './Headers.jsx'
import Rows from './Rows.jsx'
import Pagination from './Pagination.jsx'
import Summary from './Summary.jsx'
import Context from './Context.jsx'
import { propClasses } from '../../utils/index.js'

export const Layout = (props) => {
  const classes = propClasses(
    { selectable: props.rowClick },
    'celled table', props.scrollX ? 'nowrap' : 'wide',
    props.className
  );
  return <div className="datatable">
    <Summary/>
    <div className={props.scrollX ? 'scroll-x' : ''}>
      <table className={classes}>
        <Headers/>
        <Rows/>
      </table>
    </div>
    <Pagination/>
  </div>
}

export default Context.Consumer(Layout)
