import React from 'react'
import DefaultLayout from './Layout.jsx'
import Context from './Context.jsx'
import { Themed } from '../../utils/index.js'

export const DataTable = ({
  Layout = DefaultLayout,
  ...props
}) => {
  return <Context.Provider {...props}>
    <Layout/>
  </Context.Provider>
}

export default Themed(DataTable, 'DataTable');

