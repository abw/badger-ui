import { isUndefined } from './misc'

export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeWords(string) {
    return string.replace(
        /(?:^|\s)\S/g,
        a => a.toUpperCase()
    );
}

/* Utility function to inflect a string to the singular/plural form based on the
 * number of items in n
 *  e.g.
 *    inflect(0, 'cat')     # no cats
 *    inflect(1, 'cat')     # 1 cat
 *    inflect(2, 'cat')     # 2 cats
 * It uses the pluralise() function which is *VERY* primitive, because pluralising
 * words is notoriously difficult.  The third argument can be provided to define the
 * plural form for those cases where the default behaviour gets it wrong.
 *  e.g.
 *    inflect(0, 'child', 'children')     # no children
 *    inflect(1, 'child', 'children')     # 1 child
 *    inflect(2, 'child', 'children')     # 2 children
 * The optional 4th argument can be used to provide a different word for the case where
 * n is 0.  The default is "no".
 *    inflect(0, 'black', 'black', "none, none more")     # none, none more black
 */
export function inflect(n, singular, plural, no='no') {
    return (n ? commas(n) : no)
      + ' '
      + (n === 1 ? singular : (plural || pluralise(singular)));
}

/* Wrapper around inflect() which uses "No" instead of "no" for the zero
 * case, i.e. Inflect() is the capitalized form of inflect()
 */
export function Inflect(n, singular, plural, no='No') {
    return inflect(n, singular, plural, no);
}

export function pluralise(singular) {
    let found;

    if (singular.match(/(ss?|sh|ch|x)$/)) {
        // e.g. grass/grasses, lash/lashes, watch/watches, box, boxes
        return singular + 'es';
    }
    else if ((found = singular.match(/(.*?[^aeiou])y$/))) {
        // lily/lillies
        return found[1] + 'ies';
    }
    else if (singular.match(/([^s\d\W])$/)) {
        // cat/cats
        return singular + 's';
    }
    return singular;
}

export function commas(n) {
    if (isUndefined(n)) {
        return '';
    }
    var bits  = n.toString().split('.'),
        rgx   = /(\d+)(\d{3})/;

    while (rgx.test(bits[0])) {
        bits[0] = bits[0].replace(rgx, '$1,$2');
    }
    return bits.join('.');
}

export function price(money) {
    return money
        ? '£' + commas(parseFloat(money).toFixed(2))
        : '';
}

export function priceOrPOA(money) {
    return money
        ? '£' + commas(parseFloat(money).toFixed(2))
        : '£POA';
}

export function priceOrZero(money) {
    return '£' + commas(parseFloat(money || 0).toFixed(2))
}

export function pounds(money) {
    return money
        ? '£' + commas(Math.floor(parseFloat(money)).toString())
        : '';
}

export function splitParas() {
    var text = Array.prototype.slice.call(arguments).join('');
    if (text.length === 0) {
        return [ ];
    };
    var rows = text.split(/\s*\n+\s*/).filter(
        function(item) { return item.length > 0 }
    );
    return rows;
}

export const Paragraphs = ({text, className="", firstClass=""}) => <>
  { splitParas(text).map(
      (para, n) => <p key={n} className={n===0 ? firstClass : className}>{para}</p>
  )}
</>
