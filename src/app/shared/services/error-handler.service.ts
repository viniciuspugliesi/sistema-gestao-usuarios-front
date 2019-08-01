import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import Swal from 'sweetalert2';

declare let $: any;

@Injectable({
    providedIn: 'root'
})
export class ErrorHandlerService {
    error: HttpErrorResponse;

    constructor(private router: Router) {
    }

    execute() {
        if (this.error.status === 422) {
            return this.executeValidationException();
        }

        if (this.error.status === 401) {
            return this.executeUnauthorizedException();
        }

        if (this.error.status === 403) {
            return this.executeForbiddenException();
        }

        return this.executeInternalServerError();
    }

    executeValidationException() {
        Swal.fire({
            type: 'error',
            title: 'Oops... Erro de validação.',
            text: 'Verifique os campos em vermelho',
        });

        this.error.error.errors.forEach((value) => {
            let input = $('input[name="' + value.field + '"]');
            input.parent().parent().addClass('error').find('.form-text-error').text(value.message);
        });
    }

    executeUnauthorizedException() {
        return this.router.navigate(['/error/401']);
    }

    executeForbiddenException() {
        return this.router.navigate(['/error/403']);
    }

    executeInternalServerError() {
        return this.router.navigate(['/error/500']);
    }
}
