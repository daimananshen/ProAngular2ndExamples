import { Component, Input } from "@angular/core";
import { Model } from "./repository.model"
import { Product } from "./product.model"
@Component({
    selector: "paProductTable",
    templateUrl: "./app.useComponent.productTable.component.html"
})

export class ProductTableComponent {
    @Input("model")
    dataModel: Model;

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }
    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }
    showTable: boolean = true;
}