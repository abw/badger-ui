import { hasValue, objMap } from '@abw/badger-utils';

function LocalStorage() {
  let store = {};
  return {
    clear: () => (store = {}),
    getItem: (key) => store[key],
    setItem: (key, value) => (store[key] = value),
    removeItem: (key) => delete store[key],
  };
}
export const Store =
  (typeof window !== 'undefined' && window.localStorage) || LocalStorage();
export const prefixKey = (prefix, key) => [prefix, key].join('-');

export function loadState(prefix, props) {
  return objMap(props, (value, key) => {
    let stored = Store.getItem(prefixKey(prefix, key));
    return hasValue(stored) ? JSON.parse(stored) : value;
  });
}

export function saveState(prefix, props) {
  Object.keys(props).forEach((key) =>
    hasValue(props[key])
      ? Store.setItem(prefixKey(prefix, key), JSON.stringify(props[key]))
      : Store.removeItem(prefixKey(prefix, key))
  );
  return Object.keys(props).length;
}

export function Storage(prefix) {
  return {
    load: (props) => loadState(prefix, props),
    save: (props) => saveState(prefix, props),
    get: (key) => JSON.parse(Store.getItem(prefixKey(prefix, key))),
    set: (key, value) =>
      Store.setItem(prefixKey(prefix, key), JSON.stringify(value)),
  };
}

export default Storage;
