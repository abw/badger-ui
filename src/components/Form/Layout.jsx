import React from 'react'
import Context from './Context'
import Header from './Header'
import Footer from './Footer'
import { Loader } from '../Spinner'

export const Layout = ({ form, children }) =>
  <form
    action={form.action}
    method={form.method}
    encType={form.enctype}
    name={form.name}
    id={form.id}
    className="form XXloader-buffer"
  >
    <div className={form.className}>
      <Header/>
      <div className="form-body">
        {children}
      </div>
      <Footer/>
    </div>
    { (form.submitting && ! form.noSaver)
      ? <Loader color="orange" className="normal" message={form.savingMessage||'Saving...'}/>
      : null
    }
  </form>

export default Context.Consumer(Layout)
