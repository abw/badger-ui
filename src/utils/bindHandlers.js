import { splitList } from '@abw/badger-utils';

export function bindHandlers(that, names) {
  let handlers = { };
  splitList(names).forEach(
    name => {
      let method = that[name];
      if (method) {
        handlers[name] = method.bind(that);
      }
      else {
        throw new Error('Cannot bind to ' + name + ' method (not found in ' + that + ')');
      }
    }
  );
  return handlers;
}

export default bindHandlers
