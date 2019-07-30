import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    constructor(private router: Router, private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Create account - ' + environment.applicationName);
    }

    sendRegisterForm() {
        this.router.navigate(['/login']).then();
    }
}
