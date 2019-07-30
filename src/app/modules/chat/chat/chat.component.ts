import {Component, OnInit} from '@angular/core';
import {Contact} from '../../../shared/models/contact';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
    contact: Contact = null;

    constructor() {
    }

    ngOnInit() {
    }

    onChangeConversation($event) {
        this.contact = $event;
    }
}
