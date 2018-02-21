import { Component, OnInit, Input } from '@angular/core'
import { Contact } from './contact'
import { ContactService } from '../services/contact.service';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {

	id:number = 0

	contact:Contact = {
		id: null,
		name: null,
		email: null,
		message: null
	}

	@Input()
	contacts:Array<Contact> = []

	constructor(private contactService:ContactService) {
        this.contacts = this.contactService.contacts
	}

	ngOnInit() { }

	send() {
		this.contacts.push(this.copy())
		this.clear()
	}

	copy() {
		let contact = Object.assign({}, this.contact)
		contact.id = this.getId()

		return contact
	}

	getId() {
		this.id += 1
		return this.id
	}

	clear() {
		this.contact.id = null
		this.contact.name = null
		this.contact.email = null
		this.contact.message = null
	}
}