import { hasValue } from '@abw/badger-utils';

export function propClasses(tests, ...more) {
  let classes = [];
  Object.keys(tests).forEach((cls) => tests[cls] && classes.push(cls));
  if (more) {
    more.filter((i) => hasValue(i) && i.length).forEach((m) => classes.push(m));
  }
  return classes.join(' ');
}

export default propClasses;
