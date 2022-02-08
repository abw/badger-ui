import React from 'react'
import { expandOptions, findOption } from './Utils'
import List from './List'

export const Select = ({
  options=[],
  value=undefined,
  ...props
}) => {
  // this is more expensive so only do it when the options or value changes
  const optionList = expandOptions(options);
  const [selected, index] = findOption(optionList, value);

  // inner component maintains cursor state
  return <List
    {...props}
    options={options} optionList={optionList}
    value={value} selected={selected} index={index}
  />
}

export default Select
