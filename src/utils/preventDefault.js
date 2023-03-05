export function preventDefault(callback, ...args) {
  return callback
    ? function (event) {
      event.preventDefault();
      event.stopPropagation();
      return callback(...args);
    }
    : () => null;
}

export default preventDefault;
