import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    isEditRoute: boolean = false;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.handlerActualRoute();
    }

    handlerActualRoute() {
        this.isEditRoute = this.activatedRoute.snapshot['_routerState'].url === '/profile/edit';
    }
}
