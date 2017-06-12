"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var repository_model_1 = require("./repository.model");
var product_model_1 = require("./product.model");
var form_model_1 = require("./form.model");
var AppUpdateDataComponent = (function () {
    function AppUpdateDataComponent(ref) {
        this.model = new repository_model_1.Model();
        this.form = new form_model_1.ProductFormGroup();
        this.targetName = "Kayak";
        this.newProduct = new product_model_1.Product();
        this.formSubmitted = false;
        window.appRef = ref;
        window.model = this.model;
    }
    AppUpdateDataComponent.prototype.getProductByPosition = function (position) {
        return this.model.getProducts()[position];
    };
    AppUpdateDataComponent.prototype.getClassesByPosition = function (position) {
        var product = this.getProductByPosition(position);
        return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
    };
    AppUpdateDataComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    AppUpdateDataComponent.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    AppUpdateDataComponent.prototype.getProductCount = function () {
        return this.getProducts().length;
    };
    AppUpdateDataComponent.prototype.getKey = function (index, product) {
        return product.id;
    };
    AppUpdateDataComponent.prototype.getSelected = function (product) {
        return product.name == this.selectedProduct;
    };
    Object.defineProperty(AppUpdateDataComponent.prototype, "jsonProduct", {
        get: function () {
            return JSON.stringify(this.newProduct);
        },
        enumerable: true,
        configurable: true
    });
    AppUpdateDataComponent.prototype.addProduct = function (p) {
        this.model.saveProduct(p);
    };
    AppUpdateDataComponent.prototype.getFormValidationMessages = function (form) {
        var _this = this;
        var messages = [];
        Object.keys(form.controls).forEach(function (k) {
            _this.getValidationMessages(form.controls[k], k)
                .forEach(function (m) { return messages.push(m); });
        });
        return messages;
    };
    AppUpdateDataComponent.prototype.getValidationMessages = function (state, thingName) {
        var thing = state.path || thingName;
        var messages = [];
        if (state.errors) {
            for (var errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push("You must enter a " + thing);
                        break;
                    case "minlength":
                        messages.push("A " + thing + " must be at least\n" + state.errors['minlength'].requiredLength + "\ncharacters");
                        break;
                    case "pattern":
                        messages.push("The " + thing + " contains\nillegal characters");
                        break;
                }
            }
        }
        return messages;
    };
    AppUpdateDataComponent.prototype.submitForm = function (form) {
        this.formSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new product_model_1.Product();
            form.reset();
            this.formSubmitted = false;
        }
    };
    return AppUpdateDataComponent;
}());
AppUpdateDataComponent = __decorate([
    core_1.Component({
        selector: "app-update-data",
        templateUrl: "./app.updateData.component.html",
        styleUrls: ['./app.updateData.component.css']
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef])
], AppUpdateDataComponent);
exports.AppUpdateDataComponent = AppUpdateDataComponent;
//# sourceMappingURL=app.updateData.component.js.map