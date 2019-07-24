import {Component, OnInit} from '@angular/core';
import {Event} from '../../../shared/domain/event';
import {CalendarService} from './calendar.service';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {
    events: Array<Event> = [];

    constructor(private calendarService: CalendarService) {
    }

    ngOnInit() {
        this.getEvents();
    }

    getEvents() {
        this.calendarService.getEvents().subscribe((events: Array<Event>) => {
            this.events = events;
        });
    }
}
