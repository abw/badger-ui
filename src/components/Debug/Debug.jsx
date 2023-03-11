import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/index.jsx'
import icons from '../../config/icons.js'
import { Themed } from '../../utils/index.js'

const Debug = ({
  title,
  icon,
  className = '',
  text,
  children
}) =>
  <div className={`debug ${className}`}>
    <h3 className="heading"><Icon name={icon} /> {title}</h3>
    {text || children}
  </div>

Debug.propTypes = {
  /** Title for the panel. */
  title: PropTypes.string,
  /** Body text. */
  text: PropTypes.string,
  /** Name of the icon to use in the header. */
  icon: PropTypes.oneOf(Object.keys(icons)),
}

Debug.defaultProps = {
  title:  'Debug',
  icon:   'wrench',
};

export default Themed(Debug, 'Debug')
