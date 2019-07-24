import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

declare let $: any;

@Component({
    selector: 'app-compose',
    templateUrl: './compose.component.html'
})
export class ComposeComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Compose email - Administrator');
    }

    toggleEmailSidebar() {
        $('.email-app').toggleClass('side-active');
    }
}
