import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthSecurityService} from '../../security/auth-security.service';
import Swal from 'sweetalert2';
import {environment} from '../../../../environments/environment';

@Injectable()
export class RedirectIfNotAuthenticatedGuard implements CanActivate {

    constructor(private authSecurityService: AuthSecurityService,
                private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (localStorage.getItem(environment.localStorage.token) == null) {
            this.router.navigate(['login']);
            return true;
        }

        this.authSecurityService.validateToken().subscribe((isAuthenticated: boolean) => {
            if (!isAuthenticated) {
                this.router.navigate(['login']).then(() => {
                    Swal.fire({
                        type: 'warning',
                        title: 'Sua sessão expirou',
                        text: 'Realize login novamente para ter acesso ao sistema.',
                    });
                });
            }
        }, error => {
            this.router.navigate(['login']);
        });

        return true;
    }
}
