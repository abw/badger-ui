import React from 'react'
import Context from './Context.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Saving from './Saving.jsx'

export const Layout = ({ form, children }) =>
  <form
    action={form.action}
    method={form.method}
    encType={form.enctype}
    name={form.name}
    id={form.id}
    className="form"
  >
    <div className={form.className}>
      <Header/>
      <div className="form-body">
        {children}
      </div>
      <Footer/>
    </div>
    { (form.submitting && ! form.noSaver)
      ? <Saving/>
      : null
    }
  </form>

export default Context.Consumer(Layout)
