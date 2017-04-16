export class Model{
    user:
    items;

    constructor(){
        this.user = "Junwen Luo";
        this.items = [
            new ToDoItem("Firt Item", false),
            new ToDoItem("Second Item", true),
            new ToDoItem("Third Item", false),
            new ToDoItem("Fourth Item", false)
        ];
    }
}

export class ToDoItem{
    action;
    done;

    constructor(action, done){
        this.action = action;
        this.done = done;
    }
}