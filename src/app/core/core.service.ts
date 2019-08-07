import {Injectable} from '@angular/core';
import {ActivationEnd, NavigationCancel, NavigationEnd, NavigationStart, Router} from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';
import {BehaviorSubject, Observable} from 'rxjs';

declare let $: any;

@Injectable()
export class CoreService {
    private loaderStatus$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    public constructor(private router: Router) {
        this.watchRouter();
        this.focusSideBarItem();
        this.initInputPassword();
    }

    private watchRouter(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart || event instanceof ActivationEnd) {
                this.setLoader(true);
            }

            if (event instanceof NavigationEnd) {
                this.reload();

                let self = this;
                setTimeout(function() {
                    self.setLoader(false);
                    $('body')[0].scrollIntoView({behavior: 'smooth', block: 'start'});
                }, 600);
            }

            if (event instanceof NavigationCancel && event.url !== '/dashboard') {
                this.router.navigate(['/error/401']);
            }
        });
    }

    public reload(): void {
        this.reloadPerfectScroll();
        this.reloadInputs();
        this.reloadPopover();
        this.reloadTooltip();
        this.reloadDatepicker();
    }

    public setLoader(status: boolean): void {
        this.loaderStatus$.next(status);
    }

    public getLoader(): Observable<boolean> {
        return this.loaderStatus$.asObservable();
    }

    public reloadPopover(): void {
        $('[data-toggle="popover"]').popover();
    }

    public reloadTooltip(): void {
        $('[data-toggle="tooltip"]').tooltip({
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
        });
    }

    public reloadPerfectScroll(): void {
        $('.scrollable').each((index, el) => {
            return new PerfectScrollbar(el, {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20
            });
        });

        $('.scrollable-y').each((index, el) => {
            return new PerfectScrollbar(el, {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20,
                suppressScrollX: true
            });
        });

        $('.scrollable-x').each((index, el) => {
            return new PerfectScrollbar(el, {
                wheelSpeed: 2,
                wheelPropagation: true,
                minScrollbarLength: 20,
                suppressScrollY: true
            });
        });
    }

    public reloadInputs() {
        $(document).on('change', '.form-group-label .form-control', function() {
            if ($(this).val() && !$(this).hasClass('has-value')) {
                $(this).addClass('has-value');
            } else if (!$(this).val()) {
                $(this).removeClass('has-value');
            }

            if ($(this).parent().parent().hasClass('error')) {
                $(this).parent().parent().removeClass('error');
            }
        });

        $('.form-group-label .form-control').each((index, el) => {
            if ($(el).val()) {
                $(el).addClass('has-value');
            } else {
                $(el).removeClass('has-value');
            }
        });
    }

    public initInputPassword() {
        $(document).on('click', '.input-password', function() {
            let i = $(this).find('i');
            let input = $(this).parent().parent().parent().find('input');

            if (i.hasClass('fa-eye-slash')) {
                i.removeClass('fa-eye-slash').addClass('fa-eye');
                input.attr('type', 'text');
            } else {
                i.removeClass('fa-eye').addClass('fa-eye-slash');
                input.attr('type', 'password');
            }

            setTimeout(() => {
                input.focus();
            }, 100);
        });
    }

    public reloadDatepicker() {
        $('.datepicker').datepicker();
    }

    public focusSideBarItem() {
        let parentRoute = $('nav.sidebar .sidebar-menu a.active').parent().parent();

        if (parentRoute.is('ul.dropdown-menu')) {
            parentRoute.parent().addClass('open');
        }

        $(document).on('click', '.mobile-toggle-nav', function() {
            $(this).toggleClass('is-active');
        });
    }
}
