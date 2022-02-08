import React from 'react'
import Context from './Context'
import DefaultLayout from './Layout'

export const Form = ({
  Layout = DefaultLayout,
  ...props
}) =>
  <Context.Provider {...props}>
    <Layout>
      {props.children}
    </Layout>
  </Context.Provider>

export default Form
