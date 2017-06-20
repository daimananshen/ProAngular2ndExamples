import { Directive, Input, Output, EventEmitter, SimpleChange, ContentChild, ContentChildren, QueryList } from "@angular/core"
import { PaCellColor } from "./cellColor.directive";

@Directive({
    selector: "table"
})

export class PaCellColorSwitcher {

    @Input("paCellDarkColor")
    modelProperty: Boolean;

    @ContentChild(PaCellColor)
    contentChild: PaCellColor;

    @ContentChildren(PaCellColor)
    contentChildren: QueryList<PaCellColor>;

    ngOnChanges(changes: { [property: string]: SimpleChange }) {
        if (this.contentChild != null) {
            console.log(changes["modelProperty"].currentValue);
            // this.contentChild.setColor(changes["modelProperty"].currentValue);
            this.updateContentChildren(changes["modelProperty"].currentValue);
        }
    }

    ngAfterContentInit() {
        this.contentChildren.changes.subscribe(() => {
            setTimeout(() => {
                this.updateContentChildren(this.modelProperty)
            }, 0);
        });
    }

    private updateContentChildren(dark: Boolean) {
        this.contentChildren.forEach((item, index) => {
            item.setColor(index % 2 ? dark : !dark);
        });
    }
}