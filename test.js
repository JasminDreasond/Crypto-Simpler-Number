// Module
const cryptoNumber = require('./index');

// Get Number
const result = cryptoNumber({
    value: '1504050020000000000', 
    convert: 3,
    decimals: 18
});

// Result
console.log(result);