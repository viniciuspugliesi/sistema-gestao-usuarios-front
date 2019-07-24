import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardDefaultComponent} from './dashboard-default/dashboard-default.component';
import {routing} from './dashboard-routing.module';
import {FormsModule} from '@angular/forms';
import {SparklineComponent} from './dashboard-default/components/sparkline/sparkline.component';
import {TotalVisitsComponent} from './dashboard-default/components/total-visits/total-visits.component';
import {TotalPageViewsComponent} from './dashboard-default/components/total-page-views/total-page-views.component';
import {UniqueVisitorsComponent} from './dashboard-default/components/unique-visitors/unique-visitors.component';
import {BounceRateComponent} from './dashboard-default/components/bounce-rate/bounce-rate.component';
import {SalesReportComponent} from './dashboard-default/components/sales-report/sales-report.component';
import {SharedModule} from '../../shared/shared.module';
import {TodoListComponent} from './dashboard-default/components/todo-list/todo-list.component';

@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [
        DashboardDefaultComponent,
        SparklineComponent,
        TotalVisitsComponent,
        TotalPageViewsComponent,
        UniqueVisitorsComponent,
        BounceRateComponent,
        SalesReportComponent,
        TodoListComponent,
    ]
})
export class DashboardModule {
}
