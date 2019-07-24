import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from '../../../../../shared/domain/contact';
import {ContactListService} from './contact-list.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html'
})
export class ContactListComponent implements OnInit {
    contacts: Array<Contact> = [];

    @Output()
    onChangeConversation: EventEmitter<Contact> = new EventEmitter<Contact>();

    constructor(private contactListService: ContactListService) {
    }

    ngOnInit() {
        this.getContacts();
    }

    getContacts(): void {
        this.contactListService.getContacts().subscribe((contacts: Array<Contact>) => {
            this.contacts = contacts;
        });
    }

    handlerClassColor(contact: Contact): string {
        let statusWithColors: Array<any> = [
            {status: 'Online', classColor: 'c-green-500'},
            {status: 'Away', classColor: 'c-amber-500'},
            {status: 'Busy', classColor: 'c-red-500'},
            {status: 'Offline', classColor: 'c-grey-500'},
        ];

        for (let statusWithColor of statusWithColors) {
            if (statusWithColor.status === contact.status) {
                return statusWithColor.classColor;
            }
        }

        return '';
    }

    search($event: any) {
        let search = $event.target.value;

        this.contactListService.getContacts().subscribe((contacts: Array<Contact>) => {
            if (!search) {
                this.contacts = contacts;
                return;
            }

            this.contacts = contacts.filter((contact: Contact) => {
                let re = new RegExp(search, 'g'); // /^.*' + search + '.*$/
                return contact.name.match(re);
            });
        });
    }

    showConversation(contact: Contact) {
        this.onChangeConversation.emit(contact);
    }
}
