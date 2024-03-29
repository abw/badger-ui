import React from 'react'
import Optional from './Optional.jsx'
import Required from './Required.jsx'

export const Label = ({field}) =>
  <label htmlFor={field.id} className={field.labelClass || ''}>
    {field.label||<span>&nbsp;</span>}
    {field.showRequired && field.required && <Required field={field} />}
    {field.showOptional && (! field.required) && <Optional field={field} />}
  </label>

export default Label
