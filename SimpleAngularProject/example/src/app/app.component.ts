import { Component } from '@angular/core';
import { Model } from "./repository.model";

@Component({
  selector: 'my-app',
  templateUrl: `./template.html`,
})
export class AppComponent  { model: Model = new Model(); }
