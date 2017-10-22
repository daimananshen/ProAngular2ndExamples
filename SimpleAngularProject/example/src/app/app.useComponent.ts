import { Component } from "@angular/core"
import { Model } from "./repository.model";
import { Product } from "./product.model"

@Component({
    selector: "app-use-component",
    templateUrl: "./app.useComponent.html"
})

export class AppUseComponent {
    model: Model = new Model();

    addProduct(p: Product) {
        this.model.saveProduct(p);
    }
}