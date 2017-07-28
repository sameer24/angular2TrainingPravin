import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { JphPostComponent } from "./components/jph-posts.components";
import { JphUserComponent } from "./components/jph-users.components";

import { JphPostsService } from "./services/jph.posts.service";
import { DatePipe } from '@angular/common';
import { HttpModule } from '@angular/http';

import { jphRouting } from "./json.routing";

@NgModule({
    imports: [jphRouting,CommonModule],
    exports: [JphPostComponent, JphUserComponent],
    declarations: [JphPostComponent, JphUserComponent],
    providers: [JphPostsService],
})
export class JsonPlaceHolderModule { }
