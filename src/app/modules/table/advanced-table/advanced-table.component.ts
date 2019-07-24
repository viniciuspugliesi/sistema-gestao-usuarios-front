import {Component, OnInit} from '@angular/core';
import {NavRightService} from '../../../shared/components/nav-right/nav-right.service';

@Component({
    selector: 'app-advanced-table',
    templateUrl: './advanced-table.component.html'
})
export class AdvancedTableComponent implements OnInit {

    constructor(private navRightService: NavRightService) {
    }

    ngOnInit() {
    }

    openFilters() {
        this.navRightService.open();
    }
}
