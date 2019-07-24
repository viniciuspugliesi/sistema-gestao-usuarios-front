import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {routing} from './table-routing.module';
import {BasicTableComponent} from './basic-table/basic-table.component';
import {DataTableComponent} from './data-table/data-table.component';
import {DataTableService} from './data-table/data-table.service';
import {AdvancedTableComponent} from './advanced-table/advanced-table.component';
import {FiltersComponent} from './advanced-table/components/filters/filters.component';

@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [
        BasicTableComponent,
        DataTableComponent,
        AdvancedTableComponent,
        FiltersComponent
    ],
    providers: [
        DataTableService
    ]
})
export class TableModule {
}
