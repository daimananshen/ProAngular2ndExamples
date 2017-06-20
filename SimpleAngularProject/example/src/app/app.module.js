"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var attr_directive_1 = require("./attr.directive");
var twoway_directive_1 = require("./twoway.directive");
var structure_directive_1 = require("./structure.directive");
var iterator_directive_1 = require("./iterator.directive");
var cellColor_directive_1 = require("./cellColor.directive");
var cellColorSwitcher_directive_1 = require("./cellColorSwitcher.directive");
var app_component_1 = require("./app.component");
var app_updateData_component_1 = require("./app.updateData.component");
var app_structure_directive_component_1 = require("./app.structure.directive.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [app_component_1.AppComponent, app_updateData_component_1.AppUpdateDataComponent, attr_directive_1.PaAttrDirective,
            twoway_directive_1.PaModel, app_structure_directive_component_1.AppStructureDirectiveComponent, structure_directive_1.PaStructureDirective, iterator_directive_1.PaIteratorDirective, cellColor_directive_1.PaCellColor, cellColorSwitcher_directive_1.PaCellColorSwitcher],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map