import { Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { NgForm, ReactiveFormsModule } from "@angular/forms";
import { ProductFormGroup } from "./form.model"

@Component({
    selector: "app-structure-directive",
    templateUrl: "./app.structure.directive.component.html",
    styles: ["./app.structure.directive.component.css"]
})

export class AppStructureDirectiveComponent {

    model: Model = new Model();

    showTable: boolean = true;

    form: ProductFormGroup = new ProductFormGroup();

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    addProduct(p: Product) {
        this.model.saveProduct(p);
    }

    deleteProduct(key: number) {
        this.model.deleteProduct(key);
    }

    formSubmitted: boolean = false;
    newProduct: Product = new Product();

    submitForm(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }
}