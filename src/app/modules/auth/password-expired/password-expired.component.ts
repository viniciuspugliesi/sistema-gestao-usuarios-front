import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user';
import {AuthSecurityService} from '../../../core/security/auth-security.service';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';
import Swal from "sweetalert2";

@Component({
    selector: 'app-password-expired',
    templateUrl: './password-expired.component.html'
})
export class PasswordExpiredComponent implements OnInit {

    public user: User = new User();

    constructor(private authSecurityService: AuthSecurityService,
                private authService: AuthService,
                private router: Router,
                private title: Title) {
    }

    public ngOnInit(): void {
        this.title.setTitle('Password Expired - ' + environment.applicationName);
        this.user = this.authSecurityService.getAuthenticatedUser();
    }

    public sendPasswordExpiredForm(): void {
        this.authService.passwordExpired(this.user).subscribe((user: User) => {
            this.authSecurityService.updateAuthenticatedUser(user);

            this.router.navigate(['/']).then(() => {
                Swal.fire({
                    type: 'success',
                    title: 'Senha alterada!',
                    text: 'Sua senha foi alterada com sucesso.',
                });
            });
        });
    }
}
