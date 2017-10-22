import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaAttrDirective } from './attr.directive';
import { PaModel } from "./twoway.directive";
import { PaStructureDirective } from "./structure.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
import { AppUseComponent } from "./app.useComponent"
import { ProductTableComponent } from "./app.useComponent.productTable.component";
import { ProductFormComponent } from "./app.useComponent.productForm.component";
import { ToggleContentComponent } from "./toggleContent.component";

import { AppComponent } from './app.component';
import { AppUpdateDataComponent } from './app.updateData.component';
import { AppStructureDirectiveComponent } from './app.structure.directive.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, AppUpdateDataComponent, PaAttrDirective
    , PaModel, AppStructureDirectiveComponent, PaStructureDirective
    , PaIteratorDirective, PaCellColor, PaCellColorSwitcher
    , AppUseComponent, ProductFormComponent, ProductTableComponent, ToggleContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
