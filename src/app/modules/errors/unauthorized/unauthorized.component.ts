import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-unauthorized',
    templateUrl: './unauthorized.component.html'
})
export class UnauthorizedComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Unauthorized - Administrator');
    }

}
