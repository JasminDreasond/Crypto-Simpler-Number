// Tiny Numbers
const tinyNumbers = {

    // https://unicode-table.com/en/sets/superscript-and-subscript-numbers/

    // Superscript, degree
    superscript: {
        '0': ['⁰',
            'U+2070'],
        '1': ['¹',
            'U+00B9'],
        '2': ['²',
            'U+00B2'],
        '3': ['³',
            'U+00B3'],
        '4': ['⁴',
            'U+2074'],
        '5': ['⁵',
            'U+2075'],
        '6': ['⁶',
            'U+2076'],
        '7': ['⁷',
            'U+2077'],
        '8': ['⁸',
            'U+2078'],
        '9': ['⁹',
            'U+2079'],
        '+': ['⁺',
            'U+207A'],
        '-': ['⁻',
            'U+207B'],
        '=': ['⁼',
            'U+207C'],
        '(': ['⁽',
            'U+207D'],
        ')': ['⁾',
            'U+207E'],
    },

    // Subscript
    subscript: {
        '0': ['₀',
            'U+2080'],
        '1': ['₁',
            'U+2081'],
        '2': ['₂',
            'U+2082'],
        '3': ['₃',
            'U+2083'],
        '4': ['₄',
            'U+2084'],
        '5': ['₅',
            'U+2085'],
        '6': ['₆',
            'U+2086'],
        '7': ['₇',
            'U+2087'],
        '8': ['₈',
            'U+2088'],
        '9': ['₉',
            'U+2089'],
        '+': ['₊',
            'U+208A'],
        '-': ['₋',
            'U+208B'],
        '=': ['₌',
            'U+208C'],
        '(': ['₍',
            'U+208D'],
        ')': ['₎',
            'U+208E'],
    },

};

// Modules
const BigNumber = require('bignumber.js');

// Script
module.exports = function (data = {}) {

    // Get Value
    const num = new BigNumber(data.value);

    const denom = new BigNumber(10).pow(data.decimals);
    const fixer = new BigNumber(10).pow(data.convert);

    const result = num.div(denom).times(fixer);

    // Complete
    if (typeof data.symbol !== 'string') {
        return result.toNumber();
    } else {
        return data.symbol.replace('{N}', result.toString()).replace('{R}', `${tinyNumbers.superscript['('][0]}${tinyNumbers.superscript[')'][0]}`);
    }

};