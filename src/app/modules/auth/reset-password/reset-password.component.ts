import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

    constructor(private router: Router, private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Reset password - ' + environment.applicationName);
    }

    sendForgotPasswordForm() {
        this.router.navigate(['/dashboard']).then();
    }
}
