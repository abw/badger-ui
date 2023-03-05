import React from 'react'
import Context from './Context'
import { Error } from '../Alert'

const Footer = ({form}) => {
  const errors = form.errors && form.errors.length;
  return (errors && form.errorsInFooter)
    ? <footer className="form-footer">
        <Error size="small">
          Please correct the {errors > 1 ? `${errors} errors` : 'error'} highlighted above.
        </Error>
      </footer>
    : null;
}

export default Context.Consumer(Footer)
