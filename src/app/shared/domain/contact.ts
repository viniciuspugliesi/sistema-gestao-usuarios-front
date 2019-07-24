import {Conversation} from './conversation';

export class Contact {
    name: string;

    image: string;

    status: string;

    conversations: Array<Conversation> = [];
}
