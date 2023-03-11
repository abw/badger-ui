import React from 'react'
import { isDefined } from '../../../utils/index.js';
import Context from '../Context.jsx'
import State from './State.jsx'

const Field = ({ name, form, ...props }) => {
  const value  = form.values[name];
  const schema = {
    showRequired: form.showRequired,
    showOptional: form.showOptional,
    ...form.fields[name]
  }
  return <State
    {...schema}
    {...props}
    name={name}
    initialValue={isDefined(value) ? value : props.value}
  />
}

export default Context.Consumer(Field)
