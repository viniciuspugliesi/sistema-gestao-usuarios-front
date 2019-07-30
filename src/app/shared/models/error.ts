export class Error {
    message: string;

    status: number;

    path: string;

    timestamp: number;

    errors: Array<ErrorField> = [];
}

export class ErrorField {
    field: string;

    message: string;
}
