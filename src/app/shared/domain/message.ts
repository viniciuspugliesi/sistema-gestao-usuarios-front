export class Message {
    message: string;

    datetime: number;

    fill(message: string, datetime: number) {
        this.message = message;
        this.datetime = datetime;

        return this;
    }
}
