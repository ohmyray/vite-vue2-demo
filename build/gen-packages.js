const fs = require('fs')
const path = require('path')
const { alias } = require('./config');

let dirs = [];
const packages =  fs.readdirSync(alias.packages)
console.log(packages);