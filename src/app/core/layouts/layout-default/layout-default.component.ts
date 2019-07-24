import {Component, OnInit} from '@angular/core';
import {CoreService} from '../../core.service';

@Component({
    selector: 'app-layout-default',
    templateUrl: './layout-default.component.html'
})
export class LayoutDefaultComponent implements OnInit {

    constructor(public coreService: CoreService) {
    }

    ngOnInit() {
    }
}
