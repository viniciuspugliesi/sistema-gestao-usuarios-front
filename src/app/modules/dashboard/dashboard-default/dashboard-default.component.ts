import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-dashboard-default',
    templateUrl: './dashboard-default.component.html'
})
export class DashboardDefaultComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Dashboard - ' + environment.applicationName);
    }

}
