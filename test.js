// Module
const cryptoNumber = require('./index');

/* 

    DEFAULT VALUES

    decimals = 18;
    convert = 0;
    data.value = 0;

*/

// Bitcoin
console.log(cryptoNumber({
    value: '1504050020000000000', 
    convert: 3,
    decimals: 18,
    symbol: '{N} BTC{R}',
    fixed: 2
}));

// BNB (Using Default Values)
console.log(cryptoNumber({
    value: '2920020000000000', 
    convert: 3,
    symbol: '{N} BNB{R}',
    fixed: 2
}));