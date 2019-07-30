import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-unauthorized',
    templateUrl: './unauthorized.component.html'
})
export class UnauthorizedComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Unauthorized - ' + environment.applicationName);
    }

}
