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

    public login(user: User): Observable<User> {
        let url = '/auth/login';
        return this.http.post<User>(url, user);
    }

    public logout(): Observable<void> {
        let url = '/auth/logout';
        return this.http.post<void>(url, {});
    }

    public register(user: User): Observable<User> {
        let url = '/auth/register';
        return this.http.post<User>(url, user);
    }

    public forgotPassword(user: User): Observable<void> {
        let url = '/auth/forgot-password';
        return this.http.post<void>(url, user);
    }

    public resetPassword(user: User): Observable<void> {
        let url = '/auth/reset-password';
        return this.http.post<void>(url, user);
    }

    public emailVerification(token: string): Observable<void> {
        let url = '/auth/email-verification?token=' + token;
        return this.http.get<void>(url);
    }

    resendVerification(): Observable<void> {
        let url = '/auth/resend-verification';
        return this.http.get<void>(url);
    }

    passwordExpired(user: User): Observable<User> {
        let url = '/auth/password-expired';
        return this.http.post<User>(url, user);
    }
}
