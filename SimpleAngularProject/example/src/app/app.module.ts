import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaAttrDirective } from './attr.directive';
import { PaModel } from "./twoway.directive";
import { PaStructureDirective } from "./structure.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";

import { AppComponent } from './app.component';
import { AppUpdateDataComponent } from './app.updateData.component';
import { AppStructureDirectiveComponent } from './app.structure.directive.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, AppUpdateDataComponent, PaAttrDirective
    , PaModel, AppStructureDirectiveComponent, PaStructureDirective, PaIteratorDirective, PaCellColor, PaCellColorSwitcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
