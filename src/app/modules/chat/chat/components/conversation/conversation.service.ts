import {Injectable} from '@angular/core';
import {Contact} from '../../../../../shared/models/contact';
import {Message} from '../../../../../shared/models/message';
import {Conversation} from '../../../../../shared/models/conversation';

@Injectable()
export class ConversationService {

    constructor() {
    }

    newMessage(contact: Contact, message: string): Contact {
        let last_conversation = contact.conversations[contact.conversations.length - 1];

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
