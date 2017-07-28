import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';


import { EventsListComponent } from "./components/events-list.component";
import { EventsDetailsComponent } from "./components/events-details.component";
import { NewEventComponent } from "./components/new-event.component";

//Pipes
import { FirstLetterCapitalPipe } from "./pipes/first-letter-capital.pipe";
import { FilterByPipe } from "./pipes/filter-by.pipe";
import { StartsWith } from "./pipes/start-with.pipe";
import { EndsWith } from "./pipes/ends-with.pipe";
import { DateStartsWith } from "./pipes/date-with.pipe";

//Services
import { EventsService } from "./services/events.service";

import { eventRouting } from "./events.routing";


@NgModule({
    imports: [eventRouting,RouterModule,CommonModule,FormsModule, ReactiveFormsModule],
    exports: [EventsListComponent, NewEventComponent],
    declarations: [EventsListComponent, EventsDetailsComponent, FirstLetterCapitalPipe, FilterByPipe,
        StartsWith, EndsWith,
        DateStartsWith, NewEventComponent,
        ],
    providers: [EventsService,DatePipe],
})
export class EventsModule { }
