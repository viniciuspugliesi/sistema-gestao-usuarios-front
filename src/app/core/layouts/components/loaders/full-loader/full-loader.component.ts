import {Component, OnInit} from '@angular/core';
import {CoreService} from '../../../../core.service';

@Component({
    selector: 'app-full-loader',
    templateUrl: './full-loader.component.html'
})
export class FullLoaderComponent implements OnInit {

    constructor(public coreService: CoreService) {
    }

    ngOnInit() {
    }
}
