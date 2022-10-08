const BigNumber = require('bignumber.js');
module.exports = function (number, point) {

    // Get Value
    const num = new BigNumber(number);
    const denom = new BigNumber(10).pow(point);
    const tinyNumber = num.dividedBy(denom).toNumber();

    // Complete
    return tinyNumber;

};