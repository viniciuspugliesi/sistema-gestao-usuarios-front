import {Injectable} from '@angular/core';
import {User} from '../../shared/models/user';
import {environment} from '../../../environments/environment';

declare var require: any;
const CryptoJS = require('crypto-js');

@Injectable({
    providedIn: 'root'
})
export class CryptoSecurityService {

    private secretKey: string = environment.encryption.secretKey;

    public encrypt(user: User): string {
        return CryptoJS.AES.encrypt(JSON.stringify(user), this.secretKey);
    }

    public decrypt(encrypted: string): User {
        let decrypted = CryptoJS.AES.decrypt(encrypted, this.secretKey);
        return JSON.parse(decrypted.toString());
    }
}
