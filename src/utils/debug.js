export function Debugger(flag, prefix='', color='green') {
    return flag
        ? prefix
          ? (format, ...args) => console.log('%c' + prefix + ': %c' + format, `color: ${color}`, 'color:black', ...args)
          : console.log.bind(console)
        : () => (undefined);
}

// utility function to add a .debug() method to an object which either calls
// console.log() or does nothing, depending on the state of the debug flag
export function addDebug(obj, flag, prefix='', color='green') {
    obj.debug = Debugger(flag, prefix, color);
}
