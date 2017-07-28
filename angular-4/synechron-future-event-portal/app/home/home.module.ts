import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { homeRouting } from "./home.routing";

import { HomeComponent } from './components/home.components';

@NgModule({
    imports: [homeRouting],
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
