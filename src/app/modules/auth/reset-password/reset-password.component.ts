import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

    constructor(private router: Router, private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Reset password - Administrator');
    }

    sendForgotPasswordForm() {
        this.router.navigate(['/dashboard']).then();
    }
}
