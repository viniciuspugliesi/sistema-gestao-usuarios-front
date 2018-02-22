import { Component, OnInit, Input } from '@angular/core'
import { Contact } from './contact'
import { ContactService } from '../services/contact.service';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {

	public id:number = 0

	public contact:Contact = {
		id: null,
		name: null,
		email: null,
		message: null
	}

	@Input()
	public contacts:Array<Contact> = []

	public constructor(private contactService:ContactService) {
        this.contacts = this.contactService.contacts
	}

	public ngOnInit() { }

	public send() {
		this.contacts.push(this.copy())
		this.contact = new Contact()
	}

	private copy() {
		let contact = Object.assign({}, this.contact)
		contact.id = this.getId()

		return contact
	}

	private getId() {
		this.id += 1
		return this.id
	}
}