import React from 'react'
import { isDefined } from '../../../utils';
import Context from '../Context'
import State from './State'

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
