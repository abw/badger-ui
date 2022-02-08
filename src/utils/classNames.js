import { isDefined } from "./misc";

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
        more.filter( m => isDefined(m) && m.length ).forEach( m => classes.push(m) );
    }
    return classes.join(' ');
}

export default classNames
