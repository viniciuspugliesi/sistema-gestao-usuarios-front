import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-internal-server-error',
    templateUrl: './internal-server-error.component.html'
})
export class InternalServerErrorComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Internal server error - ' + environment.applicationName);
    }

}
