import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { HttpModule } from '@angular/http';

//Components import
import { AppComponent } from "./app.component";

import { EventsModule } from "./events/events.module";
import { JsonPlaceHolderModule } from "./jsonplaceholder/json-placeholder.module";
import { EmployeeModule } from "./employee/employee.module";
import { ParentChildModule } from "./parent-child-communication/parent-child.module";
import { HomeModule } from "./home/home.module";
import { HeaderComponent } from "./navigation/components/header.component";

import { rounting } from "./app.routing";

//Decorator
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, 
    ReactiveFormsModule,EventsModule,JsonPlaceHolderModule,EmployeeModule,ParentChildModule,
    HomeModule,rounting],
    declarations: [AppComponent,HeaderComponent],
    providers: [DatePipe],
    bootstrap: [AppComponent],
    exports: []
})
/**
 * imports : List of module which want to import from Angular and Custom
 * declarations : Third party component
 * providers : Services (this will be singlton and injectable)
 * bootstrap : root component name
 * exports : services or methods to export outside this module
 */
export class AppModule {

}