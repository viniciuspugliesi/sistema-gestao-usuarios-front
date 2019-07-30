import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

    constructor(private router: Router, private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Forgot Password - ' + environment.applicationName);
    }

    sendForgotPasswordForm() {
        this.router.navigate(['/login']).then();
    }
}
