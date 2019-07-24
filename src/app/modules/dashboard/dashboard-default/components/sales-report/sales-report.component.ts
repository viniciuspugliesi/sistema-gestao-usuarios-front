import {Component, OnInit} from '@angular/core';
import {SalesReport} from '../../../../../shared/domain/sales-report';

@Component({
    selector: 'app-sales-report',
    templateUrl: './sales-report.component.html'
})
export class SalesReportComponent implements OnInit {

    list: Array<SalesReport> = [
        {
            name: 'Item #1 Name',
            status: 'Old',
            date: 1554315394,
            price: 2,
        },
        {
            name: 'Item #2 Name',
            status: 'Used',
            date: 1554315394,
            price: 162,
        },
        {
            name: 'Item #3 Name',
            status: 'New',
            date: 1554315394,
            price: 43,
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    handlerClassColor(salesReport: SalesReport): string {
        let colors: Array<any> = [
            {status: 'New', color: 'bgc-deep-purple-50 c-deep-purple-700'},
            {status: 'Old', color: 'bgc-yellow-50 c-yellow-700'},
            {status: 'Used', color: 'bgc-orange-50 c-orange-700'}
        ];

        return colors.filter(x => {
            return x.status === salesReport.status;
        })[0].color;
    }
}
