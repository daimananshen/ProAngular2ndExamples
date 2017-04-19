import {Name, WeatherLocation} from "./modules/NameAndWeather";
let name = new Name("junwen", "luo");
let loc = new WeatherLocation("sunny", "shenzhen");

console.log(name.nameMessage);
console.log(loc.weatherMessage);