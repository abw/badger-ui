// utility function which applies a function to the values of an object
// and returns a new object
export function objMap(obj, fn) {
    return Object.keys(obj).reduce(
        (result, key) => {
            result[key] = fn(obj[key], key)
            return result
        },
        {}
    );
}
