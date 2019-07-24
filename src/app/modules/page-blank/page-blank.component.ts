import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-page-blank',
    templateUrl: './page-blank.component.html'
})
export class PageBlankComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Page blank - Administrator');
    }

}
