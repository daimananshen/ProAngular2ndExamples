"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var repository_model_1 = require("./repository.model");
var product_model_1 = require("./product.model");
var form_model_1 = require("./form.model");
var AppStructureDirectiveComponent = (function () {
    function AppStructureDirectiveComponent() {
        this.model = new repository_model_1.Model();
        this.showTable = true;
        this.form = new form_model_1.ProductFormGroup();
        this.formSubmitted = false;
        this.newProduct = new product_model_1.Product();
    }
    AppStructureDirectiveComponent.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    AppStructureDirectiveComponent.prototype.addProduct = function (p) {
        this.model.saveProduct(p);
    };
    AppStructureDirectiveComponent.prototype.deleteProduct = function (key) {
        this.model.deleteProduct(key);
    };
    AppStructureDirectiveComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new product_model_1.Product();
            form.reset();
            this.formSubmitted = false;
        }
    };
    return AppStructureDirectiveComponent;
}());
AppStructureDirectiveComponent = __decorate([
    core_1.Component({
        selector: "app-structure-directive",
        templateUrl: "./app.structure.directive.component.html",
        styles: ["./app.structure.directive.component.css"]
    })
], AppStructureDirectiveComponent);
exports.AppStructureDirectiveComponent = AppStructureDirectiveComponent;
//# sourceMappingURL=app.structure.directive.component.js.map