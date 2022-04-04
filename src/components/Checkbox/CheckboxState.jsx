import React, { useState } from 'react'
import Checkbox from './Checkbox'
import PropTypes from 'prop-types'

const CheckboxState = (props) => {
  const [value, setValue] = useState(props.initialValue || false);
  const change = v => {
    setValue(v);
    if (props.onChange) {
      props.onChange(v);
    }
  }
  return <Checkbox {...props} value={value} onChange={change} />
}

CheckboxState.propTypes = {
  /** Boolean value to indicate if the checkbox is initially selected or not */
  initialValue: PropTypes.bool,
};

export default CheckboxState

