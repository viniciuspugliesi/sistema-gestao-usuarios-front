import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-total-page-views',
    templateUrl: './total-page-views.component.html'
})
export class TotalPageViewsComponent implements OnInit {
    values: any = [0, 5, 6, 10, 9, 12, 4, 9];

    options: any = {barColor: '#9675ce'};

    total = '-7%';

    constructor() {
    }

    ngOnInit() {
    }

}
