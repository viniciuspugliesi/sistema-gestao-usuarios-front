import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../auth.service';
import {User} from '../../../shared/models/user';
import {AuthSecurityService} from '../../../core/security/auth-security.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    public user: User = new User();

    constructor(private router: Router,
                private title: Title,
                private authService: AuthService,
                private authSecurityService: AuthSecurityService) {
    }

    ngOnInit() {
        this.title.setTitle('Login - ' + environment.applicationName);
    }

    sendLoginForm() {
        this.authService.login(this.user).subscribe((user: User) => {
            this.authSecurityService.setAuthenticatedUser(user);
            this.router.navigate(['/dashboard']);
        });
    }
}
