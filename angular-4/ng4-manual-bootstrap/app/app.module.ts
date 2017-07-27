import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

//Components import
import { AppComponent } from "./app.component";

//Decorator
@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    providers: [],
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