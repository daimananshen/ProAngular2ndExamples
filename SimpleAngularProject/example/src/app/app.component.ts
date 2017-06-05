import { Component } from '@angular/core';
import { Model } from "./repository.model";

@Component({
  selector: 'my-app',
  templateUrl: `./template.html`,
})
export class AppComponent {
  model: Model = new Model();

  getClasses(key: number): string {
    let product = this.model.getProduct(key);
    return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
  }

  getClassMap(key: number): Object {
    let product = this.model.getProduct(key);
    return {
      "text-xs-center bg-danger": product.name == "Kayak",
      "bg-info": product.price < 50
    }
  }

  fontSizeWithUnits: string = "30px";
  fontSizeWithoutUnits: string = "30";

  getStyles(key: number): Object {
    let product = this.model.getProduct(key);
    return {
      fontSize: "30px",
      "margin.px": 100,
      color: product.price > 50 ? "red" : "green"
    };
  }
}
