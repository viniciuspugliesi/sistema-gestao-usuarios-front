import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    toggleMenu() {
        $('.app').toggleClass('is-collapsed');
    }

    searchToggle() {
        $('.search-box, .search-input').toggleClass('active');
        $('.search-input input').focus();
    }
}
