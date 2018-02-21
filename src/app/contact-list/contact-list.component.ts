import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact-form/contact';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

	@Input()
    contacts:Array<Contact> = []
    
    destroy(contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
    }
}