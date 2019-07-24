import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-basic-table',
    templateUrl: './basic-table.component.html'
})
export class BasicTableComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Basic table - Administrator');
    }

}
