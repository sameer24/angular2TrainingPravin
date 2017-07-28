import { NgModule } from "@angular/core";
import { BugListComponents } from "./components/bug-list.components";
import { BugDetailsComponent } from "./components/bug-details.components";
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BugService } from "./services/bug-service";
import { RouterModule } from "@angular/router"

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [BugListComponents, BugDetailsComponent],
    bootstrap: [],
    exports: [BugListComponents],
    providers: [BugService]
})


export class BugModule {

}