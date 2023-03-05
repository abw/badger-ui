import React from 'react'
import { Icon } from '../../Icon'

export const Help = ({field}) => {
  let {help, message} = field;

  if (message) {
    return <div className="help"><Icon name="caret-up" fixedWidth/>{message}</div>
  }
  if (help) {
    return <div className="help">{help}</div>
  }
  return null;
}

export default Help
