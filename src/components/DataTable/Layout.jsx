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
