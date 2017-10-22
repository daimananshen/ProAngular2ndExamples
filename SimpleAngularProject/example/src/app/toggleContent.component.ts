import { Component } from "@angular/core"

@Component({
    templateUrl: "./toggleContent.component.html",
    selector: "pa-toggle-content"
})

export class ToggleContentComponent {
    showContent: boolean = true
}