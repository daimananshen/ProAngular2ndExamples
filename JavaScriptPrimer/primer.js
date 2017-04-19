"use strict";
var tempConverter_1 = require("./tempConverter");
var products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
var totalValue = products
    .filter(function (item) { return item.stock > 0; })
    .reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0);
console.log("Total value:$" + totalValue.toFixed(2));
console.log("----Appling Type Annotations----");
var cTemp = tempConverter_1.TempConverter.convertFtoC(38);
console.log("The temp is " + cTemp + "C");
