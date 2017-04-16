import { Component } from "@angular/core";
import { Model, ToDoItem } from "./model";

@Component({
    selector: "todo-app",
    templateUrl: "app/app.component.html"
})
export class AppComponent {
    model = new Model();

    getName() {
        return this.model.user;
    }

    getTodoItems() {
        //return this.model.items.filter(item => !item.done);
        return this.model.items;
    }

    addItem(newItem) {
        if (newItem != "") {
            this.model.items.push(new ToDoItem(newItem, false));
        }
    }

    removeItem(index) {
        console.log(index);
        if (index >= 0) {
            this.model.items.splice(index, 1);
        }

    }
}