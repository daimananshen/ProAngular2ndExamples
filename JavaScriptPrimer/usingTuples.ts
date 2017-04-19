import { TempConverter } from "./tempConverter";
let tuple: [string, string, string];
tuple = ["London", "raining", TempConverter.convertFtoC("38")];
console.log("----Using Tuples----");
console.log(`It is ${tuple[2]} degrees C and ${tuple[1]} in ${tuple[0]}`);