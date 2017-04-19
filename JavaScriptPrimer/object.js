var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MyClass = (function () {
    function MyClass(name, weather) {
        this.name = name;
        this._weather = weather;
    }
    Object.defineProperty(MyClass.prototype, "weather", {
        get: function () {
            return "Today is " + this._weather;
        },
        set: function (value) {
            this._weather = value;
        },
        enumerable: true,
        configurable: true
    });
    MyClass.prototype.printMessages = function () {
        console.log("Hello " + this.name + ". ");
        console.log(this.weather);
    };
    return MyClass;
}());
var MySubClass = (function (_super) {
    __extends(MySubClass, _super);
    function MySubClass(name, weather, city) {
        _super.call(this, name, weather);
        this.city = city;
    }
    MySubClass.prototype.printMessages = function () {
        _super.prototype.printMessages.call(this);
        console.log("You are in " + this.city);
    };
    return MySubClass;
}(MyClass));
var myData = new MySubClass("Junwen", "Sunny", "Shenzhen");
myData.printMessages();
