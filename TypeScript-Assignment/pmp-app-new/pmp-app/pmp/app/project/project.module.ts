import { NgModule } from "@angular/core";
import { ProjrctListComponents } from "./components/project-list.components";
import { ProjectDetailsComponent } from "./components/project-details.components";
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ProjectService } from "./services/project-service";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router"


@NgModule({
    imports: [
        CommonModule,HttpModule,FormsModule, ReactiveFormsModule,RouterModule
    ],
    declarations:
    [
        ProjrctListComponents,
        ProjectDetailsComponent
    
    ],
    bootstrap: [],
    exports: [
        ProjrctListComponents       
    ],
    providers: [ProjectService]
})


export class ProjectModule {

}