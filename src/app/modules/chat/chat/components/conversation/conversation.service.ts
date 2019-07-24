import {Injectable} from '@angular/core';
import {Contact} from '../../../../../shared/domain/contact';
import {Message} from '../../../../../shared/domain/message';
import {Conversation} from '../../../../../shared/domain/conversation';

@Injectable()
export class ConversationService {

    constructor() {
    }

    newMessage(contact: Contact, message: string): Contact {
        var last_conversation = contact.conversations[contact.conversations.length - 1];

        if (last_conversation && last_conversation.itsMine) {
            last_conversation.messages.push(new Message().fill(message, 1554830989));
            contact.conversations[contact.conversations.length - 1] = last_conversation;
        } else {
            let conversation: Conversation = new Conversation();
            conversation.messages.push(new Message().fill(message, 1554830989));
            contact.conversations.push(conversation);
        }

        return contact;
    }
}
