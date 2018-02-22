import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact-form/contact';
import { ContactService } from '../services/contact.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {

    public contacts:Array<Contact> = []

    public constructor(private contactService:ContactService) {
        this.contacts = this.contactService.contacts
    }

    public ngOnInit() { }

    public destroy(contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
    }
}