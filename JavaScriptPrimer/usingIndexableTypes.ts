import { TempConverter } from "./tempConverter";
let cities:{[index: string]:[string, string]} = {};
cities["London"] = ["raining", TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", TempConverter.convertFtoC(52)];
cities["Berlin"] = ["snowing", TempConverter.convertFtoC("23")];

console.log("----Using Indexable Types----");
for(let key in cities){
    console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}