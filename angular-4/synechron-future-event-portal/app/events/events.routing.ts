import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsDetailsComponent } from "./components/events-details.component";
import { EventsListComponent } from "./components/events-list.component";
import { NewEventComponent } from "./components/new-event.component";

const eventsRouteConfig: Routes = [
    {
        path: '',
        component: EventsListComponent
    },
    {
        path: 'new',
        component: NewEventComponent
    },
    {
        path: ':id',
        component: EventsDetailsComponent
    }

]


export const eventRouting: ModuleWithProviders = RouterModule.forChild(eventsRouteConfig);
