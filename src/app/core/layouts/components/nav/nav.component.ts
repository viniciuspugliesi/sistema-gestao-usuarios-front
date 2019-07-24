import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        this.handlerMenu();
    }

    handlerMenu() {
        this.sidebarLinks();
        this.sidebarActivityClass();
    }

    sidebarLinks() {
        $(document).on('click', '.sidebar .sidebar-menu li a', function() {
            let parent = $(this).parent();

            if (parent.hasClass('open')) {
                parent.children('.dropdown-menu').slideUp(200, function() {
                    parent.removeClass('open');
                });
            } else {
                parent.parent().children('li.open').children('.dropdown-menu').slideUp(200);

                parent.parent().children('li.open').children('a').removeClass('open');

                parent.parent().children('li.open').removeClass('open');

                parent.children('.dropdown-menu').slideDown(200, () => {
                    parent.addClass('open');
                });
            }
        });
    }

    sidebarActivityClass() {
        $('.sidebar')
            .find('.sidebar-link')
            .each((index, el) => {
                $(el).parent().removeClass('active');
            })
            .filter(() => {
                let href = ($(this).attr('routerlink')) ? $(this).attr('routerlink') : $(this).attr('href');
                if (!href) {
                    return false;
                }

                let pattern = href[0] === '/' ? href.substr(1) : href;

                return pattern === (window.location.pathname).substr(1);
            })
            .parent().addClass('active');
    }

    toggleMenu() {
        $('.app').toggleClass('is-collapsed');
    }
}
