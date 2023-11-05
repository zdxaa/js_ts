"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var fileContent = fs.readFileSync('./data.txt', 'utf8');
console.log(fileContent);
