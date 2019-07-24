import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartComponent} from './chart/chart.component';
import {ChartService} from './chart/chart.service';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {routing} from './charts-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        routing,
        CommonModule,
        HttpClientModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [
        ChartComponent,
    ],
    providers: [
        ChartService
    ]
})
export class ChartsModule {
}
