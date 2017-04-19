"use strict";
var tempConverter_1 = require("./tempConverter");
var tuple;
tuple = ["London", "raining", tempConverter_1.TempConverter.convertFtoC("38")];
console.log("----Using Tuples----");
console.log("It is " + tuple[2] + " degrees C and " + tuple[1] + " in " + tuple[0]);
