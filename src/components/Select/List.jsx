import React from 'react'
import Icon from '../Icon'
import { classNames, isDefined } from '../../utils'
import { onKeyPress } from './Utils'
import Options from './Options'

export const List = ({
  options=[],
  optionList=[],
  placeholder='Select',
  index=undefined,
  disabled=false,
  openIcon,
  closedIcon,
  selected,
  optionClass,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  // cursor to track which option is highlighted in the list, or undefined when options not visible
  const [cursor, setCursor] = React.useState(isDefined(index) ? index : -1);
  const [open, setOpen] = React.useState(false);

  const toggleVisibility = () => {
    // if currently open (cursor is defined) then set cursor to undefined to close,
    // otherwise open up options with nothing item highlighted (cursor is -1, so pressing
    // down or up will wrap it around to the first/last item)
    //setCursor(isDefined(cursor) ? undefined : isDefined(index) ? index : -1);
    setOpen(! open);
  }
  const cname = classNames(props, 'select', disabled && 'disabled', open ? 'open' : 'closed');
  const blur = () => {
    //setCursor(isDefined(index));
    setOpen(false);
    if (onBlur) {
      onBlur();
    }
  };

  return <div
    className={cname} tabIndex="0"
    aria-disabled={disabled}
    onFocus={onFocus} onBlur={blur}
    onClick={disabled ? null : toggleVisibility}
    onKeyDown={
      disabled
        ? null
        : e => {
          setOpen(true);
          onKeyPress(e, optionList, cursor, setCursor, setOpen, onChange)
        }
    }
  >
    <div className="wide input">
      { isDefined(selected)
        ? <div className="value">{selected.text}</div>
        : <div className="placeholder">{placeholder||''}</div>
      }
      <Icon name={open ? openIcon : closedIcon} className=""/>
    </div>
    { open
      ? <div className="options">
          <Options
            options={options} cursor={cursor}
            setCursor={setCursor} onChange={onChange}
            optionClass={optionClass}
          />
        </div>
      : null
    }
  </div>
}

export default List
