import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/index.jsx'
import { sizes } from '../../config/index.js'
import { classNames, Themed } from '../../utils/index.js';
import { hasValue } from '@abw/badger-utils';

const Button = ({
  type = 'button',
  text, children,
  disabled,
  outline, solid, shade, gradient, round,
  label, icon, iconLeft, iconRight,
  onClick, tabIndex=0,
  ...props
}) => {
  const content = text || children;
  const classes = classNames(
    props,
    'button',
    outline ? 'outline' : solid ? 'solid' : shade ? 'shade' : gradient ? 'gradient' : null,
    round && 'round',
    hasValue(content) || 'empty'
  )
  return <button
    className={classes}
    aria-label={label} onClick={onClick} tabIndex={tabIndex}
    type={type} disabled={disabled} aria-disabled={disabled}
  >
    {icon && <Icon icon={icon} fixedWidth />}
    {iconLeft && <Icon icon={iconLeft} className="on-left" fixedWidth />}
    {content
      ? <span className="caption">{content}</span>
      : null
    }
    {iconRight && <Icon icon={iconRight} className="on-right" fixedWidth />}
  </button>
}

Button.propTypes = {
  /** Any custom css `class` for the container element. */
  className: PropTypes.string,
  /** Name of color for the button.
    * If `solid` is set then this will set the background color.
    * Otherwise it sets the foreground color.
    */
  color: PropTypes.string,
  /** Boolean flag to make the button outlined. */
  outline: PropTypes.bool,
  /** Boolean flag to make the button solid filled. */
  solid: PropTypes.bool,
  /** Boolean flag to make the button solid filled with shading. */
  shade: PropTypes.bool,
  /** Button type, defaults to "button" but can be set to "submit" or "reset" for use in forms. */
  type: PropTypes.string,
  /** Text content for the button. */
  text: PropTypes.string,
  /** Custom React content for the button as an alternative to `text`. */
  children: PropTypes.element,
  /** Value for the area-label attribute. */
  label: PropTypes.string,
  /** Button size. */
  size: PropTypes.oneOf(sizes),
  /** Name of an icon to use for the button content. Generally used without `text`. */
  icon: PropTypes.string,
  /** Name of an icon to use for the left side of the `text` content. */
  iconLeft: PropTypes.string,
  /** Name of an icon to use for the right side of the `text` content. */
  iconRight: PropTypes.string,
  /** Tab index for the button. */
  tabIndex: PropTypes.number,
  /** Click handler for the button. */
  onClick: PropTypes.func,
  /** Boolean flag to make the button disabled. */
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  solid: false,
};

export default Themed(Button, 'Button')
