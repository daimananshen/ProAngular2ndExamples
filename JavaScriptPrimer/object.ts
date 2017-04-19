class MyClass {

    constructor(name, weather) {
        this.name = name;
        this._weather = weather;
    }

    set weather(value){
        this._weather = value;
    }

    get weather(){
        return `Today is ${this._weather}`;
    }

    printMessages() {
        console.log("Hello " + this.name + ". ");
        console.log(this.weather);
    }
}

class MySubClass extends MyClass{
    constructor(name, weather, city){
        super(name, weather);
        this.city = city;
    }

    printMessages(){
        super.printMessages();
        console.log(`You are in ${this.city}`);
    }
}

let myData = new MySubClass("Junwen", "Sunny", "Shenzhen");
myData.printMessages();

