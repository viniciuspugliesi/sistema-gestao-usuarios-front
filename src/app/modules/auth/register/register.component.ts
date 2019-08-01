import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';
import {User} from '../../../shared/models/user';
import {AuthService} from '../auth.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

    user: User = new User();

    constructor(private router: Router,
                private title: Title,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.title.setTitle('Create account - ' + environment.applicationName);
    }

    sendRegisterForm() {
        this.authService.register(this.user).subscribe((user: User) => {
            this.router.navigate(['/login']).then(() => {
                Swal.fire({
                    type: 'success',
                    title: 'Cadastro realizado!',
                    text: 'Em instantes enviaremos um email para ativar seu cadastro.',
                });
            });
        });
    }
}
