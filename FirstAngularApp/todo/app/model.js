"use strict";
var Model = (function () {
    function Model() {
        this.user = "Junwen Luo";
        this.items = [
            new ToDoItem("Firt Item", false),
            new ToDoItem("Second Item", true),
            new ToDoItem("Third Item", false),
            new ToDoItem("Fourth Item", false)
        ];
    }
    return Model;
}());
exports.Model = Model;
var ToDoItem = (function () {
    function ToDoItem(action, done) {
        this.action = action;
        this.done = done;
    }
    return ToDoItem;
}());
exports.ToDoItem = ToDoItem;
