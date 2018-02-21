import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact-form/contact';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {

    contacts:Array<Contact> = []

    constructor(private contactService:ContactService) {
        this.contacts = this.contactService.contacts
    }

    ngOnInit() { }

    destroy(contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
    }
}