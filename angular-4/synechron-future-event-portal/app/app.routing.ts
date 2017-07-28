import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const defaultRoutes: Routes = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    }
]
const homeRoutes: Routes = [
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    }
]
const eventsRoutes: Routes = [
    {
        path: 'events',
        loadChildren: 'app/events/events.module#EventsModule'
    }
]
const employeeRoutes: Routes = [
    {
        path: 'employee',
        loadChildren: 'app/employee/employee.module#EmployeeModule'
    }
]
const jsonRoutes: Routes = [
    {
        path: 'posts',
        loadChildren: 'app/jsonplaceholder/json-placeholder.module#JsonPlaceHolderModule'
    }
]
const parentRoutes: Routes = [
    {
        path: 'parent-child',
        loadChildren: 'app/parent-child-communication/parent-child.module#ParentChildModule'
    }
]

const appRoutes: Routes = [
    // { path: 'home', component: HomeComponent },
    // { path: 'employee', component: EmployeeListComponent },
    // { path: 'employee/:id', component: EmployeeDetailsComponent },
    // { path: 'events/:id', component: EventsDetailsComponent },
    // { path: 'newevent', component: NewEventComponent },
    // { path: 'events', component: EventsListComponent },
    // { path: 'posts', component: JphPostComponent },
    // { path: 'parent-child', component: ParentComponent },
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: '**', redirectTo: '/home' }

    ...defaultRoutes,
    ...eventsRoutes,
    ...parentRoutes,
    ...jsonRoutes,
    ...employeeRoutes,
    ...homeRoutes

];

export const rounting: ModuleWithProviders = RouterModule.forRoot(appRoutes);