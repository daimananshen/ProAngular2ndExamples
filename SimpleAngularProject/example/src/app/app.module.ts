import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaAttrDirective } from './attr.directive'
import { PaModel } from "./twoway.directive"

import { AppComponent }  from './app.component';
import { AppUpdateDataComponent } from './app.updateData.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, AppUpdateDataComponent, PaAttrDirective, PaModel],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
