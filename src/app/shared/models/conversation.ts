import {Message} from './message';

export class Conversation {
    itsMine: boolean;

    messages: Array<Message> = [];

    constructor() {
        this.itsMine = true;
    }
}
