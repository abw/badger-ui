import {
  hasValue, haveValue, noValue, splitList
} from '@abw/badger-utils'
export {
  isString, isArray, isFunction, isObject,
  splitList, doNothing, debounce, sleep
} from '@abw/badger-utils'

export const isUndefined = noValue
export const isDefined = hasValue
export const areDefined = haveValue
export const splitToList = splitList;

