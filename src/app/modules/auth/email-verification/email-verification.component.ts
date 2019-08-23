import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {AuthService} from '../auth.service';
import {environment} from '../../../../environments/environment';
import Swal from 'sweetalert2';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'app-email-verification',
    template: ''
})
export class EmailVerificationComponent implements OnInit {

    constructor(private router: Router,
                private title: Title,
                private activatedRoute: ActivatedRoute,
                private authService: AuthService) {
    }

    public ngOnInit() {
        this.title.setTitle('Check password - ' + environment.applicationName);
        this.handlerQueryParamToken();
    }

    private handlerQueryParamToken(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            if (params.token == null) {
                return this.router.navigate(['login']);
            }

            this.sendEmailVerification(params.token);
        });
    }

    private sendEmailVerification(token: string) {
        this.authService.emailVerification(token).subscribe(() => {
            this.router.navigate(['/login']).then(() => {
                Swal.fire({
                    type: 'success',
                    title: 'Cadastrado ativado!',
                    text: 'Seu cadastro foi ativado e agora você pode acessar o sistema normalmente.',
                });
            });
        }, (e: HttpErrorResponse) => {
            e.error.errors.forEach(value => {
                if (value.field === 'token') {
                    this.router.navigate(['/login']).then(() => {
                        Swal.fire({
                            type: 'error',
                            title: 'Token inválido!',
                            text: 'O token é inválido, expirou ou já foi utilizado.',
                        });
                    });
                }
            });
        });
    }
}
