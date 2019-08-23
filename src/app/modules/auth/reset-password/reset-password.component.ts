import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';
import {User} from '../../../shared/models/user';
import Swal from 'sweetalert2';
import {AuthService} from '../auth.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

    public user: User = new User();

    constructor(private router: Router,
                private title: Title,
                private activatedRoute: ActivatedRoute,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.title.setTitle('Reset password - ' + environment.applicationName);
        this.handlerQueryParamToken();
    }

    sendResetPasswordForm() {
        this.authService.resetPassword(this.user).subscribe(() => {
            this.router.navigate(['/login']).then(() => {
                Swal.fire({
                    type: 'success',
                    title: 'Senha alterada!',
                    text: 'Sua senha foi alterada com sucesso, realize seu login com a nova senha.',
                });
            });
        }, (e: HttpErrorResponse) => {
            e.error.errors.forEach(value => {
                if (value.field === 'token') {
                    this.router.navigate(['/login']).then(() => {
                        Swal.fire({
                            type: 'error',
                            title: 'Token inválido!',
                            text: 'O token utilizado é inválido, expirou ou já foi utilizado.',
                        });
                    });
                }
            });
        });
    }

    private handlerQueryParamToken(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            if (params.token == null) {
                this.router.navigate(['login']).then(() => {
                    Swal.fire({
                        type: 'error',
                        title: 'Token inválido!',
                        text: 'Não foi encontrado o token.',
                    });
                });
            }

            this.user.token = (params.token) ? params.token : '';
        });
    }
}
