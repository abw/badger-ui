import { isDefined } from '../../utils'

export const expandOptions = (options) => {
  // options can include nested groups, e.g.
  //   options = [
  //    { text: 'One', value: 1 }
  //    { text: 'Two',
  //      options: [
  //        { text: 'Two One', value: 21 },
  //        { text: 'Two Two', value: 22 },
  //      ]
  //    }
  //   ]
  // This expands them into a single list and adds an index counter to each one
  // options: [
  //    { text: 'One', value: 1, index: 0 }
  //    { text: 'Two One', value: 21, index: 1 },
  //    { text: 'Two Two', value: 21, index: 2 },
  // ]
  let expanded = [ ];
  let index = 0;
  // expand nested options
  expandOptionList(options, expanded);
  // give each an index number
  expanded.forEach(
    option => option.index = index++
  );
  return expanded;
}

// recursive function to expand nested options
export const expandOptionList = (options, expanded) => {
  options.forEach(
    option => {
      if (isDefined(option.value)) {
        expanded.push(option);
      }
      if (isDefined(option.options)) {
        expandOptionList(option.options, expanded);
      }
    }
  );
}

// look through an expanded list of options (see above) to find one with a matching value
export const findOption = (options, value) => {
  if (isDefined(value)) {
    const index = options.findIndex(v => v.value === value);
    if (index >= 0) {
      return [options[index], index];
    }
  }
  return [undefined, undefined];
}

// keyboard handler to move highlighted item up/down, select with Enter, cancel with Escape
export const onKeyPress = (event, options, cursor, setCursor, setOpen, onChange) => {
  switch (event.key) {
    case 'ArrowDown':
      // set cursor to next item in list or start at first item if not currently showing options
      event.preventDefault();
      setOpen(true);
      return setCursor(
        isDefined(cursor)
          ? (cursor + 1) % options.length
          : 0
      );

    case 'ArrowUp':
      // set cursor to previous item in list or start at last item if not currently showing options
      event.preventDefault();
      setOpen(true);
      setCursor(
        isDefined(cursor) && cursor >= 0
          ? ((cursor - 1) + options.length) % options.length
          : options.length - 1
      );
      break;

    case 'Enter':
    case ' ':
      // select current option if there is one
      event.preventDefault();
      if (onChange && isDefined(cursor)) {
        onChange(options[cursor]);
      }
      setOpen(false);
      break;

    case 'Escape':
      // unset cursor to close options list
      event.preventDefault();
      return setOpen(false);

    default:
      // do nothing
  }
}
