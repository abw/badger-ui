import React from 'react'
import Headers from './Headers'
import Rows from './Rows'
import { propClasses } from '../../utils'
import Pagination from './Pagination'
import Summary from './Summary'

export const Layout = (props) => {
  const classes = propClasses(
    { selectable: props.rowClick },
    'wide celled table', props.className
  );
  return <div className="datatable">
    <Summary {...props}/>
    <table className={classes}>
      <Headers {...props}/>
      <Rows {...props}/>
    </table>
    <Pagination {...props}/>
  </div>
}

export default Layout

