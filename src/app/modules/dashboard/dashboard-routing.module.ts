import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardDefaultComponent} from './dashboard-default/dashboard-default.component';

const routes: Routes = [
    {path: '', component: DashboardDefaultComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
