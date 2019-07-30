import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthSecurityService} from '../../security/auth-security.service';

@Injectable()
export class RedirectIfNotAuthenticatedGuard implements CanActivate {

    constructor(private authSecurityService: AuthSecurityService,
                private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.authSecurityService.validateToken().subscribe((isAuthenticated: boolean) => {
            if (!isAuthenticated) {
                return this.router.navigate(['login']);
            }
        });

        return true;
    }
}
