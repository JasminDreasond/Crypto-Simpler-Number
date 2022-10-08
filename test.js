// Module
const cryptoNumber = require('./index');

// Bitcoin
console.log(cryptoNumber({
    value: '1504050020000000000', 
    convert: 3,
    decimals: 18,
    symbol: '{N} BTC{R}',
    fixed: 2
}));

// BNB
console.log(cryptoNumber({
    value: '0002920020000000000', 
    decimals: 18,
    symbol: '{N} BNB{R}',
    fixed: 5
}));