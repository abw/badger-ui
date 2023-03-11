import React from 'react'
import Context from './Context.jsx'
import DefaultLayout from './Layout.jsx'
import { Themed } from '../../utils/index.js';

const Form = ({
  Layout = DefaultLayout,
  ...props
}) =>
  <Context.Provider {...props}>
    <Layout>
      {props.children}
    </Layout>
  </Context.Provider>

export default Themed(Form, 'Form')
