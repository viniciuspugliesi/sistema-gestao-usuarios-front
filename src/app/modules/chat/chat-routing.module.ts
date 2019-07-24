import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from './chat/chat.component';

const routes: Routes = [
    {path: '', component: ChatComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
