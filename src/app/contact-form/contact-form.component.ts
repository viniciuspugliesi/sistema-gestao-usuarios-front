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

	contact:Contact = {
		name: '',
		email: '',
		message: ''
	}

	@Input()
	contacts:Array<Contact> = []

	send() {
		let contact = Object.assign({}, this.contact)
		this.contacts.push(contact)
		this.clear()
	}

	clear() {
		this.contact.name = ''
		this.contact.email = ''
		this.contact.message = ''
	}
}