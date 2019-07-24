import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';

const routes: Routes = [
    {path: '', component: CalendarComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
