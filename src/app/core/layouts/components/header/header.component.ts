import {Component, OnInit} from '@angular/core';
import {AuthSecurityService} from '../../../security/auth-security.service';
import {User} from '../../../../shared/models/user';

declare let $: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    public user: User = new User();

    public constructor(private authSecurityService: AuthSecurityService) {
    }

    public ngOnInit(): void {
        this.user = this.authSecurityService.getAuthenticatedUser();
    }

    public toggleMenu(): void {
        $('.app').toggleClass('is-collapsed');
    }

    public searchToggle(): void {
        $('.search-box, .search-input').toggleClass('active');
        $('.search-input input').focus();
    }
}
