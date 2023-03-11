import React from 'react'
import Select from './Select.jsx'

const SelectState = (props) => {
  const [value, setValue] = React.useState(props.initialValue || false);
  const change = option => {
    setValue(option.value);
    if (props.onChange) {
      props.onChange(option);
    }
  }
  return <Select {...props} value={value} onChange={change}/>
}

export default SelectState
