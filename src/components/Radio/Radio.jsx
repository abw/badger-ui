import React from 'react'
import Icon from '../Icon'
import { classNames, isDefined } from '../../utils'

export const Radio = ({
  options = [],
  value, disabled = false,
  checkedIcon = 'dotted', uncheckedIcon = 'undotted',
  optionClass, onChange, onFocus, onBlur,
  ...props
}) => {
  const onKeyPress = (event, option) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      return onChange && onChange(option);
    }
  };
  const cname = classNames(props, 'radioset', disabled && 'disabled');
  const index = isDefined(value)
    ? options.findIndex(v => v.value === value)
    : undefined;

  return <div className={cname || ''}>
    {options.map(
      (option, n) => {
        const active = !disabled && !option.disabled;
        const click = onChange && active
          ? () => onChange(option)
          : null;
        const press = onChange && active
          ? e => onKeyPress(e, option)
          : null;
        return <div
          key={n}
          className={`checkbox ${optionClass || ''} ${option.className || ''} ${active ? '' : 'disabled'}`}
          tabIndex={active ? 0 : -1} onKeyPress={press} onClick={click}
          onFocus={active ? onFocus : null} onBlur={active ? onBlur : null}>
          <Icon
            name={isDefined(index) && index === n ? checkedIcon : uncheckedIcon}
            className="mar-r" fixedWidth
          />
          <span className="text">{option.text}</span>
        </div>
      }
    )}
  </div>
}

export default Radio
