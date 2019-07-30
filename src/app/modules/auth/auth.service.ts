import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../shared/models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    public login(user: User): Observable<any> {
        let url = '/auth/login';
        return this.http.post<any>(url, user,{ observe: 'response' });
    }

    public logout(): Observable<any> {
        let url = '/auth/logout';
        return this.http.get<any>(url);
    }
}
