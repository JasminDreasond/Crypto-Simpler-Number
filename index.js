const BigNumber = require('bignumber.js');
module.exports = function(number, point) {

    // Get Value
    const tinyNumber = Number(new BigNumber(number).toFixed());

    // Complete
    return tinyNumber;

};