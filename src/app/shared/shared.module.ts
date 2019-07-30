import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MinNumberPipe} from './pipes/min-number/min-number.pipe';
import {TimestampPipe} from './pipes/timestamp/timestamp.pipe';
import {ParseDatePipe} from './pipes/parse-date/parse-date.pipe';
import {NumberDirective} from './directives/number/number.directive';
import {NumberToHourPipe} from './pipes/number-to-hour/number-to-hour.pipe';
import {PricePipe} from './pipes/price/price.pipe';
import {PreventDefaultDirective} from './directives/prevent-default/prevent-default.directive';
import {ArrayHelper} from './helpers/array-helper';
import {NumberHelper} from './helpers/number-helper';
import {DateTimeHelper} from './helpers/date-time-helper';
import {MoneyHelper} from './helpers/money-helper';
import {NavRightComponent} from './components/nav-right/nav-right.component';
import {ModalService} from './components/modal/modal.service';
import {ModalComponent} from './components/modal/modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
    declarations: [
        PricePipe,
        MinNumberPipe,
        TimestampPipe,
        ParseDatePipe,
        NumberToHourPipe,
        PreventDefaultDirective,
        NumberDirective,
        NavRightComponent,
        ModalComponent,
    ],
    exports: [
        PricePipe,
        MinNumberPipe,
        TimestampPipe,
        ParseDatePipe,
        NumberToHourPipe,
        PreventDefaultDirective,
        NumberDirective,
        NavRightComponent,
        ModalComponent,
    ],
    providers: [
        NumberHelper,
        MoneyHelper,
        ArrayHelper,
        DateTimeHelper,
        ModalService,
    ]
})
export class SharedModule {
}
