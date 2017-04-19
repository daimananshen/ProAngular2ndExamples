"use strict";
var NameAndWeather_1 = require("./modules/NameAndWeather");
var name = new NameAndWeather_1.Name("junwen", "luo");
var loc = new NameAndWeather_1.WeatherLocation("sunny", "shenzhen");
console.log(name.nameMessage);
console.log(loc.weatherMessage);
