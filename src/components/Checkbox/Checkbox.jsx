import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/index.jsx'
import { classNames, Themed } from '../../utils/index.js'

const Checkbox = ({
  text,
  value = false,
  disabled = false,
  checkedText = text,
  uncheckedText = text,
  checkedIcon,
  uncheckedIcon,
  iconClass = '',
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const onKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      return onChange && onChange(!value);
    }
  };
  const click = onChange && !disabled ? () => onChange(!value) : null;
  const press = disabled ? null : onKeyPress;
  const icon  = value ? checkedIcon : uncheckedIcon;
  const cname = classNames(props, 'checkbox input', value && 'checked', disabled && 'disabled');

  return (
    <div
      className={cname} tabIndex={disabled ? -1 : 0}
      onClick={click} onKeyPress={press} onFocus={onFocus} onBlur={onBlur}
      aria-disabled={disabled}
    >
      <Icon name={icon} className={`mar-r ${iconClass}`} fixedWidth />
      <span className="text">{value ? checkedText : uncheckedText}</span>
    </div>
  )
}

Checkbox.propTypes = {
  /** Boolean value to indicate if the checkbox is selected or not */
  value: PropTypes.bool,
  /** Boolean value to indicate if the checkbox is disabled or not */
  disabled: PropTypes.bool,
  /** Any custom css `class` for the container element. */
  className: PropTypes.string,
  /** Text content for the checkbox or an element. */
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /** Checked and unchecked text */
  checkedText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  uncheckedText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /** Name of an icon to use for the checked state. */
  checkedIcon: PropTypes.string,
  /** Name of an icon to use for the checked state. */
  uncheckedIcon: PropTypes.string,
  /** Any custom css `class` for the icon element. */
  iconClass: PropTypes.string,
  /** Change handler for the checkbox. */
  onChange: PropTypes.func,
  /** Focus handler for the checkbox. */
  onFocus: PropTypes.func,
  /** Blur handler for the checkbox. */
  onBlur: PropTypes.func,
};

Checkbox.defaultProps = {
  checkedIcon:   'check-on',
  uncheckedIcon: 'check-off',
};

export default Themed(Checkbox, 'Checkbox')

