import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {InternalServerErrorComponent} from './internal-server-error/internal-server-error.component';

const routes: Routes = [
    {path: '401', component: UnauthorizedComponent},
    {path: '403', component: ForbiddenComponent},
    {path: '404', component: NotFoundComponent},
    {path: '500', component: InternalServerErrorComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
