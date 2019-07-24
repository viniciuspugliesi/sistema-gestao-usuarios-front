import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../../../../shared/domain/event';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {
    @Input()
    events: Array<Event> = [];

    constructor() {
    }

    ngOnInit() {
    }

    deleteEvent(event: Event) {
        this.events = this.events.filter(value => {
            return value !== event;
        });
    }
}
