import { hasValue, isObject, isString } from '@abw/badger-utils';

export function classNames(props, ...more) {
  let classes = [ ];
  ['color','size','className'].forEach(
    prop => {
      if (props[prop]) {
        classes.push(props[prop]);
      }
    }
  );
  if (more) {
    more
      .filter( m => hasValue(m) )
      .forEach(
        m => {
          if (isString(m)) {
            // each additional argument can be a className to add...
            classes.push(m)
          }
          else if (isObject(m)) {
            // ...or a lookup table of props with classes to add, e.g.
            // { fixedWidth: 'fa-fw' } (use in Icon.jsx)
            Object.entries(m).forEach(
              ([prop, className]) => {
                if (props[prop]) {
                  classes.push(className)
                }
              }
            )
          }
        }
      )
  }
  return classes.join(' ');
}

export default classNames
