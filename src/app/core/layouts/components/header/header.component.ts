import {Component, OnInit} from '@angular/core';
import {AuthSecurityService} from '../../../security/auth-security.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../../modules/auth/auth.service';

declare let $: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    public constructor(private authSecurityService: AuthSecurityService,
                       private authService: AuthService,
                       private router: Router) {
    }

    public ngOnInit(): void {
    }

    public toggleMenu(): void {
        $('.app').toggleClass('is-collapsed');
    }

    public searchToggle(): void {
        $('.search-box, .search-input').toggleClass('active');
        $('.search-input input').focus();
    }

    public logout(): void {
        this.authService.logout().subscribe(() => {
            this.authSecurityService.logout();
            this.router.navigate(['/login']);
        });
    }
}
