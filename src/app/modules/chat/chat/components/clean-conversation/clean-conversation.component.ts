import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-clean-conversation',
    templateUrl: './clean-conversation.component.html'
})
export class CleanConversationComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    toggleChatSidebar() {
        $('#chat-sidebar').toggleClass('open');
    }
}
