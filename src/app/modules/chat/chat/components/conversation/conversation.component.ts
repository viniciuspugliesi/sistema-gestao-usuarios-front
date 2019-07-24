import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../../../../shared/domain/contact';
import {ConversationService} from './conversation.service';
import {CoreService} from '../../../../../core/core.service';

declare let $: any;

@Component({
    selector: 'app-conversation',
    templateUrl: './conversation.component.html'
})
export class ConversationComponent implements OnInit {
    @Input()
    contact: Contact = null;

    @Output()
    onCloseConversation: EventEmitter<boolean> = new EventEmitter<boolean>(true);

    message: string;

    constructor(private conversationService: ConversationService, private coreService: CoreService) {
    }

    ngOnInit() {
    }

    contactInformation() {

    }

    clearMessages() {
        this.contact.conversations = [];
    }

    sendMessage() {
        this.contact = this.conversationService.newMessage(this.contact, this.message);
        this.message = null;
        this.coreService.reloadPerfectScroll();
    }

    toggleChatSidebar() {
        $('#chat-sidebar').toggleClass('open');
    }
}
