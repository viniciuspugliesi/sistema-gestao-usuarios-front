import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthSecurityService} from '../../security/auth-security.service';
import {environment} from '../../../../environments/environment';
import {User} from '../../../shared/models/user';

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
                this.router.navigate(['lock']);
                return;
            }

            let user: User = this.authSecurityService.getAuthenticatedUser();

            if (user.emailVerifiedAt === null) {
                this.router.navigate(['email-unverified']);
            }
        });

        return true;
    }
}
