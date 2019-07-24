import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChartComponent} from './chart/chart.component';

const routes: Routes = [
    {path: '', component: ChartComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
