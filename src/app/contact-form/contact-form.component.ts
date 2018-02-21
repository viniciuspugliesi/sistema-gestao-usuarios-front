import { Component, OnInit } from '@angular/core'
import { Contact } from './contact'

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {

	construct() { }

	ngOnInit() { }

	contacts = []

	contact:Contact = {
		name: '',
		email: '',
		password: '',
		price: 0,
		date: ''
	}

	send() {
		let contact = Object.assign({}, this.contact)

		this.contacts.push(contact)
	}
}