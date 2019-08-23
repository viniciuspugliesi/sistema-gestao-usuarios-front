import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../shared/models/user';
import {environment} from '../../../environments/environment';
import {CryptoSecurityService} from './crypto-security.service';

@Injectable({
    providedIn: 'root'
})
export class AuthSecurityService {

    public constructor(private http: HttpClient, private cryptoService: CryptoSecurityService) {
    }

    public setAuthenticatedUser(user: User): void {
        localStorage.setItem(environment.localStorage.token, user.token);
        localStorage.setItem(environment.localStorage.user, this.cryptoService.encrypt(user));
    }

    public updateAuthenticatedUser(user: User): void {
        localStorage.setItem(environment.localStorage.user, this.cryptoService.encrypt(user));
    }

    public getAuthenticatedUser(): User {
        let userEncrypted = localStorage.getItem(environment.localStorage.user);

        if (userEncrypted == null) {
            return;
        }

        return this.cryptoService.decrypt(userEncrypted);
    }

    public logout(): void {
        localStorage.removeItem(environment.localStorage.token);
        localStorage.removeItem(environment.localStorage.user);
    }

    public validateToken() {
        let token = localStorage.getItem(environment.localStorage.token);
        let url = '/auth/check?token=' + token;

        return this.http.get<boolean>(url);
    }
}
