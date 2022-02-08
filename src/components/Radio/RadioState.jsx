import React, { useState } from 'react'
import Radio from './Radio'

export const RadioState = (props) => {
  const [value, setValue] = useState(props.initialValue || false);
  const change = option => {
    setValue(option.value);
    if (props.onChange) {
      props.onChange(option);
    }
  }
  return <Radio {...props} value={value} onChange={change} />
}

export default RadioState
