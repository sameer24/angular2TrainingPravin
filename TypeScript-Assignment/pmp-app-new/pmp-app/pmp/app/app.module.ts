import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EmployeeModule } from "./employee/employee.module";
import { CompanyModule } from "./company/company.module";
import { ProjectModule } from "./project/project.module";
import { UserstoryModule } from "./userstory/userstory.module";
import { TaskModule } from "./task/task.module";
import { BugModule } from "./bug/bug.module";
import { HomeModule } from "./home/home.module";
import { HeaderComponent } from "./navigation/components/header.component";
import { routing } from "./app.routing";
 

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        EmployeeModule,
        ProjectModule,
        CompanyModule,
        UserstoryModule,
        TaskModule,
        BugModule,
        HomeModule,
        routing
    ],
    declarations: [
        AppComponent,HeaderComponent
    ],
    bootstrap: [AppComponent],
    exports: [],
    providers: [
    ]
})

export class AppModule {
}