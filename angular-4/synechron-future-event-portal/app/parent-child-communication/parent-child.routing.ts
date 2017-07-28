import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentComponent } from "./compononents/parent.component";

const parentRouteConfig: Routes = [
    {
        path: '',
        component: ParentComponent
    }
    
]

export const parentRouting: ModuleWithProviders = RouterModule.forChild(parentRouteConfig);