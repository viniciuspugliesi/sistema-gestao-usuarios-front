import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicTableComponent} from './basic-table/basic-table.component';
import {DataTableComponent} from './data-table/data-table.component';
import {AdvancedTableComponent} from './advanced-table/advanced-table.component';

const routes: Routes = [
    {path: 'basic-tables', component: BasicTableComponent},
    {path: 'advanced-tables', component: AdvancedTableComponent},
    {path: 'data-tables', component: DataTableComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
