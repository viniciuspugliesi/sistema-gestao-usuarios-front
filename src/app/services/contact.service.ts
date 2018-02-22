import { Injectable } from '@angular/core';
import { Contact } from '../contact-form/contact';

@Injectable()
export class ContactService {

    contacts:Array<Contact> = []

    public constructor() { }

}