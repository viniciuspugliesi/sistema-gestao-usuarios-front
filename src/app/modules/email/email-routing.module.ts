import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InboxComponent} from './inbox/inbox.component';
import {ComposeComponent} from './compose/compose.component';

const routes: Routes = [
    {path: '', component: InboxComponent},
    {path: 'inbox', component: InboxComponent},
    {path: 'compose', component: ComposeComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
