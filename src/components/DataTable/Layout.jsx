import React from 'react'
import Headers from './Headers'
import Rows from './Rows'
import Pagination from './Pagination'
import Summary from './Summary'
import Context from './Context'
import { propClasses } from '../../utils'

export const Layout = (props) => {
  const classes = propClasses(
    { selectable: props.rowClick },
    'wide celled table', props.className
  );
  return <div className="datatable">
    <Summary/>
    <table className={classes}>
      <Headers/>
      <Rows/>
    </table>
    <Pagination/>
  </div>
}

export default Context.Consumer(Layout)
