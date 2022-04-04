import React from 'react'
import Icon from '../Icon'
import { Themed } from '../../utils'

const Missing = ({
  item,
  text,
  children,
  fallback,
  icon,
  className = ''
}) =>
  <div className={`missing ${className}`}>
    {icon && <Icon name={icon} fixedWidth/>}
    { children
      ? <div className="content">{children}</div>
      : <h3 className="mar-none">
          {text || (item ? `No ${item}` : fallback)}
        </h3>
    }
  </div>

Missing.defaultProps = {
  icon:     'circle-question',
  fallback: 'Not found',
};

export default Themed (Missing, 'Missing')

