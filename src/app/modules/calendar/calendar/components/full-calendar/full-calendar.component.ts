import {Component, Input, OnInit} from '@angular/core';
import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

declare let $: any;

@Component({
    selector: 'app-full-calendar',
    templateUrl: './full-calendar.component.html'
})
export class FullCalendarComponent implements OnInit {
    calendar: Calendar;

    calendarEvents: Array<any> = [];

    constructor() {
    }

    @Input()
    set events(events: Array<any>) {
        this.calendarEvents = events;

        if (this.calendarEvents) {
            this.initCalendar();
        }
    }

    ngOnInit() {
        this.initCalendar();
    }

    initCalendar() {
        let events = this.calendarEvents;

        if (this.calendar) {
            this.calendar.destroy();
        }

        this.calendar = new Calendar(document.getElementById('full-calendar'), {
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
            events,
            locale: 'en', // pt-br
            height: 800,
            editable: true,
            navLinks: true, // can click day/week names to navigate views
            selectable: true,
            eventLimit: false, // allow "more" link when too many events
            header: {
                left: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                center: 'title',
                right: 'today prev,next',
            },
        });

        this.calendar.render();
    }
}
