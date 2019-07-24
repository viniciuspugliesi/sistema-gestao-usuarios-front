import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailsComponent} from './details/details.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
    {path: '', component: DetailsComponent},
    {path: 'edit', component: EditComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

