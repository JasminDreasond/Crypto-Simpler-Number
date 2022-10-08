// Module
const cryptoSn = require('./index');

/* 

    Decimals = Crypto Decimals (Default: 18)
    Convert = Number of decimals to be removed (Default: 0)
    Value = Crypto Value (Default: 0)

    Symbol = The final result when the value is shown in a string
    fixed = toFixed() result

*/

// Bitcoin
console.log(cryptoSn({
    value: '1504050020000000000', 
    convert: 3,
    decimals: 18,
    symbol: '{N} BTC{R}',
    fixed: 2
}));

// BNB (Using Default Values)
console.log(cryptoSn({
    value: '2920020000000000', 
    convert: 3,
    symbol: '{N} BNB{R}',
    fixed: 2
}));

// SHIB (Using Default Values)
console.log(cryptoSn({
    value: '899280000000000000000000', 
    convert: -5,
    symbol: '{N} SHIB{R}',
    fixed: 4
}));

/* 

    Result

    1504.05 BTC³
    2.92 BNB³
    8.9928 SHIB⁻⁵

*/