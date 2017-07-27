import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/components/home.components';
import { EmployeeListComponent } from "./employee/components/employee-list.component";
import { EmployeeDetailsComponent } from "./employee/components/employee-details.components";
import { EventsDetailsComponent } from "./events/components/events-details.component";
import { EventsListComponent } from "./events/components/events-list.component";
import { NewEventComponent } from "./events/components/new-event.component";
import { JphPostComponent } from "./jsonplaceholder/components/jph-posts.components";
import { ParentComponent } from "./parent-child-communication/compononents/parent.component";


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employee', component: EmployeeListComponent },
    { path: 'employee/:id', component: EmployeeDetailsComponent },
    { path: 'events/:id', component: EventsDetailsComponent },
    { path: 'newevent', component: NewEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'posts', component: JphPostComponent },
    { path: 'parent-child', component: ParentComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];

export const rounting: ModuleWithProviders = RouterModule.forRoot(appRoutes);