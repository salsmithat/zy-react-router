let pathToRegExp = require("path-to-regexp");
let keys = [];
let regexp = pathToRegExp("/home/:id", keys, { end: true });
console.log(regexp.test("/home/2"));
console.log(keys);
