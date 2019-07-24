import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-unverified',
    templateUrl: './unverified.component.html'
})
export class UnverifiedComponent implements OnInit {

    constructor(private router: Router, private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Unverified - Administrator');
    }

    sendFormUnverified() {
        this.router.navigate(['/dashboard']).then();
    }
}
