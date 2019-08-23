import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AuthSecurityService} from '../../../core/security/auth-security.service';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-logout',
    template: ''
})
export class LogoutComponent implements OnInit {

    constructor(private authSecurityService: AuthSecurityService,
                private authService: AuthService,
                private router: Router) {
    }

    public ngOnInit(): void {
        this.logout();
    }

    public logout(): void {
        if (localStorage.getItem(environment.localStorage.token) == null) {
            this.authSecurityService.logout();
            this.router.navigate(['/login']);
            return;
        }

        this.authService.logout().subscribe(() => {
            this.authSecurityService.logout();
            this.router.navigate(['/login']);
        }, error => {
            this.authSecurityService.logout();
            this.router.navigate(['/login']);
        });
    }
}
