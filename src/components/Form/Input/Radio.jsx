import React from 'react';
import UIRadio from '../../Radio';

export const Radio = ({field})=>
  <UIRadio
    options={field.options}
    value={field.value}
    name={field.name}
    disabled={field.disabled}
    placeholder={field.placeholder}
    onChange={option => field.onChangeValue(option.value)}
    onFocus={field.onFocus}
    onBlur={field.onBlur}
    className={`${field.className} radio`}
  />

export default Radio
