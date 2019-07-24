import {Component, OnInit} from '@angular/core';
import {NavRightService} from '../../../../../shared/components/nav-right/nav-right.service';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html'
})
export class FiltersComponent implements OnInit {

    constructor(private navRightService: NavRightService) {
    }

    ngOnInit() {
    }

    onCloseFilter() {

    }

    submit() {
        this.navRightService.close();
    }
}
