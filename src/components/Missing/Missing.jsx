import React from 'react'
import Icon from '../Icon'

export const Missing = ({
  item,
  text, children,
  icon = 'circle-question',
  className = ''
}) =>
  <div className={`missing ${className}`}>
    {icon && <Icon name={icon} fixedWidth/>}
    { children
      ? <div className="content">{children}</div>
      : <h3 className="mar-none">
          {text || (item ? `No ${item}` : 'Not found')}
        </h3>
    }
  </div>

export default Missing
