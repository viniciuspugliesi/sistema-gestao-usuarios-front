import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from './logs-routing.module';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {ApiLogsComponent} from './api-logs/api-logs.component';


@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [ApiLogsComponent]
})
export class LogsModule {
}
