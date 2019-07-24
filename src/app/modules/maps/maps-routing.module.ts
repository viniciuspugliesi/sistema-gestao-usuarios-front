import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {GoogleMapsComponent} from './google-maps/google-maps.component';

const routes: Routes = [
    {path: 'google-maps', component: GoogleMapsComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

