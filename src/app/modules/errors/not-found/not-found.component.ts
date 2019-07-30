import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Not found - ' + environment.applicationName);
    }

}
