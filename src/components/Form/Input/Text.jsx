import React from 'react';
import { isDefined } from '../../../utils'

export const Text = ({field}) =>
  <input
    className={`input ${field.className}`}
    type={field.type||'text'} id={field.id}
    name={field.name}
    value={isDefined(field.value) ? field.value : ''}
    disabled={field.disabled}
    aria-disabled={field.disabled}
    tabIndex={field.disabled ? -1 : undefined}
    placeholder={field.placeholder}
    autoComplete={field.autocomplete}
    onChange={field.onChange}
    onFocus={field.onFocus}
    onBlur={field.onBlur}
  />

export default Text
