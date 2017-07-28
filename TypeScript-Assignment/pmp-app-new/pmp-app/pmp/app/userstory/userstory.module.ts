import { NgModule } from "@angular/core";
import { UserstoryListComponents } from "./components/us-list.components";
import { UsersoryDetailsComponent } from "./components/us-details.components";
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UserstoryService } from "./services/us-service";
import { RouterModule } from "@angular/router"

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [UserstoryListComponents, UsersoryDetailsComponent],
    bootstrap: [],
    exports: [UserstoryListComponents],
    providers: [UserstoryService]
})


export class UserstoryModule {

}