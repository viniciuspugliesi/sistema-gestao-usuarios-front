import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-total-visits',
    templateUrl: './total-visits.component.html'
})
export class TotalVisitsComponent implements OnInit {
    values: any = [0, 5, 6, 10, 9, 12, 4, 9];

    options: any = {barColor: '#4caf50'};

    total = '+10%';

    constructor() {
    }

    ngOnInit() {
    }

}
