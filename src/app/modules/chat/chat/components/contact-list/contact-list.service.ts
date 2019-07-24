import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../../../../../shared/domain/contact';
import {Observable} from 'rxjs';

@Injectable()
export class ContactListService {

    constructor(private http: HttpClient) {
    }


    getContacts(): Observable<Array<Contact>> {
        return this.http.get<Array<Contact>>('./assets/data/chat/contacts.json');
    }
}
