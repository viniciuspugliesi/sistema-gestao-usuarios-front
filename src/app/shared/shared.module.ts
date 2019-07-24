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
import {APIInterceptor, HTTPStatus} from './http/interceptors/api-interceptor';
import {NumberHelper} from './helpers/number-helper';
import {DateTimeHelper} from './helpers/date-time-helper';
import {MoneyHelper} from './helpers/money-helper';
import {RedirectIfAuthenticatedGuard} from './guards/redirect-if-authenticated/redirect-if-authenticated.guard';
import {RedirectIfNotAuthenticatedGuard} from './guards/redirect-if-not-authenticated/redirect-if-not-authenticated.guard';
import {NavRightComponent} from './components/nav-right/nav-right.component';

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
    ],
    providers: [
        HTTPStatus,
        APIInterceptor,
        NumberHelper,
        MoneyHelper,
        ArrayHelper,
        DateTimeHelper,
        RedirectIfAuthenticatedGuard,
        RedirectIfNotAuthenticatedGuard,
    ]
})
export class SharedModule {
}
