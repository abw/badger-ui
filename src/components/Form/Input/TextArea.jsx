import React from 'react';

export const TextArea = ({field}) =>
  <textarea
    className={`input ${field.className}`}
    id={field.id}
    name={field.name}
    value={field.value||''}
    disabled={field.disabled}
    aria-disabled={field.disabled}
    placeholder={field.placeholder}
    onChange={field.onChange}
    onFocus={field.onFocus}
    onBlur={field.onBlur}
    rows={field.rows||5}
  />

export default TextArea
