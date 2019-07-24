import {Component, OnInit} from '@angular/core';
import {CoreService} from '../../../../core.service';

@Component({
    selector: 'app-local-loader',
    templateUrl: './local-loader.component.html'
})
export class LocalLoaderComponent implements OnInit {

    constructor(public coreService: CoreService) {
    }

    ngOnInit() {
    }

}
