import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { FirsLetterCaptialPipe } from './employee/pipes/firs-letter-captial.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    FirsLetterCaptialPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
