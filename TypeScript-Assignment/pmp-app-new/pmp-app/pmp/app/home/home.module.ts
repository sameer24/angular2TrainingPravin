import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./components/home.component";
 


@NgModule({
    imports: [HttpModule,CommonModule
    ],
    declarations:
    [
        HomeComponent
    ],
    bootstrap: [],
    exports: [HomeComponent],
    providers: []
})


export class HomeModule {

}