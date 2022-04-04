//import { useEffect } from 'react'

export const isUndefined = v =>
  typeof v === 'undefined'
    || v === null

export const isDefined = v =>
  typeof v !== 'undefined'
    && v !== null

export const areDefined = (...args) =>
  args.every( arg => isDefined(arg) )

export const isString = value =>
  typeof value === 'string'

export const isArray = value =>
  Array.isArray(value)

export const isFunction = value =>
  typeof value === 'function'

export const isObject = value =>
  typeof value === 'object' && !!value;

export function doNothing() {
  // speak again Cordelia
}

export const splitToList = value =>
  isString(value) ? value.split(/,\s*|\s+/)
    :  isArray(value)  ? value
    :  [value]

// NOTE: this works like the _.range() function in lodash (which in turn
// does the same thing as Array.slice() et al) in that it DOES NOT include
// the stop parameter.  e.g. range(1, 3) returns [1, 2]
export const range = (start, stop) =>
  Array(stop - start).fill(start).map((x, y) => x + y)

export function debounce(func, timeout=300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(
      () => func.apply(this, args),
      timeout
    );
  };
}

