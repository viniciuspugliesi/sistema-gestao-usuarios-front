import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-unique-visitors',
    templateUrl: './unique-visitors.component.html'
})
export class UniqueVisitorsComponent implements OnInit {
    values: any = [0, 5, 6, 10, 9, 12, 4, 9];

    options: any = {barColor: '#03a9f3'};

    total = '~12%';

    constructor() {
    }

    ngOnInit() {
    }

}
