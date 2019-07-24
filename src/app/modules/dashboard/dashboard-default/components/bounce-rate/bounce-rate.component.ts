import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-bounce-rate',
    templateUrl: './bounce-rate.component.html'
})
export class BounceRateComponent implements OnInit {
    values: any = [0, 5, 6, 10, 9, 12, 4, 9];

    options: any = {barColor: '#f96262'};

    total = '33%';

    constructor() {
    }

    ngOnInit() {
    }

}
