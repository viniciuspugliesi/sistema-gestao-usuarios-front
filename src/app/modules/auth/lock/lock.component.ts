import {Component, OnInit} from '@angular/core';
import {User} from '../../../shared/models/user';
import {AuthSecurityService} from '../../../core/security/auth-security.service';
import {environment} from '../../../../environments/environment';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-lock',
    templateUrl: './lock.component.html'
})
export class LockComponent implements OnInit {

    public user: User = new User();

    public constructor(private router: Router,
                       private title: Title,
                       private authService: AuthService,
                       private authSecurityService: AuthSecurityService) {
    }

    public ngOnInit(): void {
        this.title.setTitle('Lock - ' + environment.applicationName);
        this.user = this.authSecurityService.getAuthenticatedUser();
    }

    public sendLockForm(): void {
        this.authService.login(this.user).subscribe((user: User) => {
            this.authSecurityService.setAuthenticatedUser(user);
            this.router.navigate(['/dashboard']);
        });
    }
}
