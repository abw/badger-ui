import React, { useState } from 'react'
import Storage from '../../utils/Storage'
import { Buttons } from '../Button/index.jsx'

const Switch = ({
  options={},
  selectedColor='orange',
  selectedClass='solid',
  unselectedColor='grey',
  unselectedClass='outline',
  initialValue=Object.keys(options)[0],
  className,
  storageKey
}) => {
  const store = storageKey && Storage(storageKey);
  const start = { selected: initialValue }
  const state = store
    ? store.load(start)
    : start

  const [selected, setSelected] = useState(state.selected);
  const setSwitch = key => {
    if (store) {
      store.save({ selected: key });
    }
    setSelected(key);
  }

  const buttons = Object.entries(options).map(
    ([value, options]) => {
      const active = value === selected;
      const classes = [
        options.className || '',
        options.color || (active ? selectedColor : unselectedColor),
        active ? selectedClass : unselectedClass,
      ];
      return {
        ...options,
        className: classes.join(' '),
        onClick: () => setSwitch(value)
      }
    }
  )
  const defaultClass = className;
  const Component = ({className=defaultClass}) =>
    <Buttons buttons={buttons} className={className}/>;

  return [selected, Component];
}

export default Switch
