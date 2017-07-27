import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ParentComponent } from "./compononents/parent.component";
import { ChildComponent } from "./compononents/child.component";

@NgModule({
    imports: [CommonModule],
    exports: [ParentComponent],
    declarations: [ParentComponent, ChildComponent],
    providers: [],
})
export class ParentChildModule { }
