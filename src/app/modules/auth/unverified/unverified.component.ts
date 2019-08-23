import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';
import {User} from '../../../shared/models/user';
import {AuthSecurityService} from '../../../core/security/auth-security.service';
import {AuthService} from '../auth.service';
import Swal from "sweetalert2";

@Component({
    selector: 'app-unverified',
    templateUrl: './unverified.component.html'
})
export class UnverifiedComponent implements OnInit {

    public user: User = new User();

    constructor(private authSecurityService: AuthSecurityService,
                private authService: AuthService,
                private router: Router,
                private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Unverified - ' + environment.applicationName);
        this.user = this.authSecurityService.getAuthenticatedUser();
    }

    sendFormUnverified() {
        this.authService.resendVerification().subscribe(() => {
            Swal.fire({
                type: 'success',
                title: 'Solicitação enviada!',
                text: 'Em instantes enviaremos um email para você renovar sua senha.',
            });
        });
    }
}
