<div align="center">
<p>
    <a href="https://discord.gg/TgHdvJd"><img src="https://img.shields.io/discord/413193536188579841?color=7289da&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/crypto-sn"><img src="https://img.shields.io/npm/v/crypto-sn.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/crypto-sn"><img src="https://img.shields.io/npm/dt/crypto-sn.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.patreon.com/JasminDreasond"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg?logo=patreon" alt="Patreon" /></a>
    <a href="https://ko-fi.com/jasmindreasond"><img src="https://img.shields.io/badge/donate-ko%20fi-29ABE0.svg?logo=ko-fi" alt="Ko-Fi" /></a>
</p>
<p>
    <a href="https://nodei.co/npm/crypto-sn/"><img src="https://nodei.co/npm/crypto-sn.png?downloads=true&stars=true" alt="npm installnfo" /></a>
</p>
</div>

# Crypto-Simpler-Number

This project is to simplify cryptocurrency numbers to values more similar to fiat currency values.
The complete example is present in the test.js file.

```js

// Module
const cryptoSn = require('crypto-sn');

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

*/

```