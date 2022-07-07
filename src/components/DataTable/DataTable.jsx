import React from 'react'
import DefaultLayout from './Layout'
import Context from './Context'
import { Themed } from '../../utils'

export const DataTable = ({
  Layout = DefaultLayout,
  ...props
}) => {
  return <Context.Provider {...props}>
    <Layout/>
  </Context.Provider>
}

export default Themed(DataTable, 'DataTable');

