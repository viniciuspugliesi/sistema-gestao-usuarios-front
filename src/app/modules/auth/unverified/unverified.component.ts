import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';
import {User} from '../../../shared/models/user';
import {AuthSecurityService} from '../../../core/security/auth-security.service';

@Component({
    selector: 'app-unverified',
    templateUrl: './unverified.component.html'
})
export class UnverifiedComponent implements OnInit {

    public user: User = new User();

    constructor(private authSecurityService: AuthSecurityService,
                private router: Router,
                private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Unverified - ' + environment.applicationName);
        this.user = this.authSecurityService.getAuthenticatedUser();
    }

    sendFormUnverified() {
        this.router.navigate(['/dashboard']).then();
    }
}
