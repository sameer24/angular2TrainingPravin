import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JphPostComponent } from "./components/jph-posts.components";


const jphRouteConfig: Routes = [
    {
        path: '',
        component: JphPostComponent
    }
    
]

export const jphRouting: ModuleWithProviders = RouterModule.forChild(jphRouteConfig);