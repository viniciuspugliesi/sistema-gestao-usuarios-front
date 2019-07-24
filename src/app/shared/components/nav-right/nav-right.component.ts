import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoreService} from '../../../core/core.service';
import {NavRightService} from './nav-right.service';

declare let $: any;

@Component({
    selector: 'app-nav-right',
    templateUrl: './nav-right.component.html'
})
export class NavRightComponent implements OnInit {
    @Input()
    width: string = '450px';

    @Output()
    opened: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    @Output()
    closed: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    constructor(private coreService: CoreService, private navRightService: NavRightService) {
    }

    ngOnInit() {
        this.coreService.reloadPerfectScroll();
        this.watchOpen();
        this.watchClose();
    }

    watchOpen() {
        let self = this;

        this.navRightService.closed.subscribe(() => {
            self.close();
        });
    }

    watchClose() {
        let self = this;

        this.navRightService.opened.subscribe(() => {
            self.open();
        });
    }

    open() {
        $('.open-right-drawer').addClass('is-active');
        $('.app-drawer-wrapper').addClass('drawer-open');
        $('.app-drawer-overlay').removeClass('d-none');

        this.opened.emit(true);
    }

    close() {
        $('.app-drawer-overlay').addClass('d-none');
        $('.app-drawer-wrapper').removeClass('drawer-open');
        $('.open-right-drawer').removeClass('is-active');

        this.closed.emit(true);
    }
}
