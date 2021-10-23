let pathToRegExp = require("path-to-regexp");
let keys = [];
let regexp = pathToRegExp("/home", keys, { end: false });
console.log(regexp.test("/home"));
