import React from 'react'
import { Icon } from '../../Icon/index.jsx'

export const Optional = ({field}) =>
  <span className="optional">
    { (field.valid || field.invalid || true) &&
      <Icon name={field.valid ? 'check' : field.invalid ? 'warning' : 'plus'}/>
    }
    optional
  </span>

export default Optional
