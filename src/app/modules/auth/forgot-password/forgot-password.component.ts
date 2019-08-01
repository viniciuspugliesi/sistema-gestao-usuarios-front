import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';
import {User} from '../../../shared/models/user';
import Swal from 'sweetalert2';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

    user: User = new User();

    constructor(private router: Router,
                private title: Title,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.title.setTitle('Forgot Password - ' + environment.applicationName);
    }

    sendForgotPasswordForm() {
        this.authService.forgotPassword(this.user).subscribe(() => {
            this.router.navigate(['/login']).then(() => {
                Swal.fire({
                    type: 'success',
                    title: 'Solicitação enviada!',
                    text: 'Em instantes enviaremos um email para você renovar sua senha.',
                });
            });
        });
    }
}
