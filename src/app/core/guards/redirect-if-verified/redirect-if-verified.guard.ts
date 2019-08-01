import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthSecurityService} from '../../security/auth-security.service';
import {User} from '../../../shared/models/user';

@Injectable({
    providedIn: 'root'
})
export class RedirectIfVerifiedGuard implements CanActivate {

    constructor(private authSecurityService: AuthSecurityService,
                private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let user: User = this.authSecurityService.getAuthenticatedUser();

        if (user.emailVerifiedAt !== null) {
            this.router.navigate(['/']);
        }

        return true;
    }
}
