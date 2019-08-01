import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AuthSecurityService} from '../../../core/security/auth-security.service';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html'
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
        this.authService.logout().subscribe(() => {
            this.authSecurityService.logout();
            this.router.navigate(['/login']);
        });
    }
}
