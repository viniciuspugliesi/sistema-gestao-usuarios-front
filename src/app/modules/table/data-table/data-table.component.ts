import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {DataTableService} from './data-table.service';

declare let $: any;

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html'
})
export class DataTableComponent implements OnInit {
    public data: Array<any> = [];

    constructor(private title: Title, private dataTableService: DataTableService) {
    }

    ngOnInit() {
        this.title.setTitle('Datatable - Administrator');
        this.getData();
    }

    getData(): void {
        this.dataTableService.getData().subscribe((data: Array<any>) => {
            this.data = data;
            this.initDatatable();
        });
    }

    initDatatable() {
        setTimeout(() => {
            $('#datatable').DataTable();
        }, 500);
    }
}
