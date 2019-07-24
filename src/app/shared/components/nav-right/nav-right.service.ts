import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavRightService {

    @Output()
    opened: EventEmitter<boolean> = new EventEmitter(true);

    @Output()
    closed: EventEmitter<boolean> = new EventEmitter(true);

    constructor() {
    }

    close() {
        this.closed.emit(true);
    }

    open() {
        this.opened.emit(true);
    }
}
