import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';

declare let $: any;

@Component({
    selector: 'app-inbox',
    templateUrl: './inbox.component.html'
})
export class InboxComponent implements OnInit {

    constructor(private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle('Inbox email - ' + environment.applicationName);
    }

    toggleEmailSidebar() {
        $('.email-app').toggleClass('side-active');
    }

    toggleMessage() {
        $('.email-content').toggleClass('open');
    }
}
