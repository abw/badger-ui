import React from 'react';
import UICheckbox from '../../Checkbox'

export const Checkbox = ({field}) =>
  <UICheckbox
    name={field.name}
    text={field.text}
    value={field.value ? true : false}
    disabled={field.disabled}
    className={field.className}
    onChange={checked => field.onChangeValue(checked ? 1 : 0)}
    onFocus={field.onFocus}
    onBlur={field.onBlur}
  />

export default Checkbox
