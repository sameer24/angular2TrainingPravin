import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ParentComponent } from "./compononents/parent.component";
import { ChildComponent } from "./compononents/child.component";

import { parentRouting } from "./parent-child.routing";

@NgModule({
    imports: [CommonModule,parentRouting],
    exports: [ParentComponent],
    declarations: [ParentComponent, ChildComponent],
    providers: [],
})
export class ParentChildModule { }
