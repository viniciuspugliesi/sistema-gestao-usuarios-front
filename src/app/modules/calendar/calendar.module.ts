import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './calendar/calendar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {routing} from './calendar-routing.module';
import {EventsComponent} from './calendar/components/events/events.component';
import {FullCalendarComponent} from './calendar/components/full-calendar/full-calendar.component';
import {CalendarService} from './calendar/calendar.service';

@NgModule({
    imports: [
        routing,
        CommonModule,
        HttpClientModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [
        CalendarComponent,
        EventsComponent,
        FullCalendarComponent,
    ],
    providers: [
        CalendarService
    ],
})
export class CalendarModule {
}
