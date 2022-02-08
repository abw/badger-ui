import React from 'react';
import UISelect from '../../Select';

export const Select = ({field})=>
  <UISelect
    options={field.options}
    value={field.value}
    name={field.name}
    disabled={field.disabled}
    placeholder={field.placeholder}
    onChange={option => field.onChangeValue(option.value)}
    onFocus={field.onFocus}
    onBlur={field.onBlur}
    className={`${field.className} select`}
  />

export default Select
