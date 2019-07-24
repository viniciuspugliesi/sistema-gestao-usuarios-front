import {Component, OnInit} from '@angular/core';
import {Contact} from '../../../shared/domain/contact';

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
