import { Component, OnInit, Input } from '@angular/core'
import { Contact } from './contact'

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {

	construct() { }

	ngOnInit() { }

	id:number = 0

	contact:Contact = {
		id: null,
		name: null,
		email: null,
		message: null
	}

	@Input()
	contacts:Array<Contact> = []

	send() {
		let contact = Object.assign({}, this.contact)

		contact.id = this.getId()
		this.contacts.push(contact)

		this.clear()
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