import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-unverified',
    templateUrl: './unverified.component.html'
})
export class UnverifiedComponent implements OnInit {

    constructor(private router: Router, private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Unverified - ' + environment.applicationName);
    }

    sendFormUnverified() {
        this.router.navigate(['/dashboard']).then();
    }
}
