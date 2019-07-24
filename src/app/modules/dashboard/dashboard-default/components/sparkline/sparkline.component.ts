import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SparklineOptions} from '../../../../../shared/domain/sparkline-options';

declare let $: any;

@Component({
    selector: 'app-sparkline',
    templateUrl: './sparkline.component.html'
})
export class SparklineComponent implements OnInit {
    @ViewChild('selector', {static: true})
    private selector: ElementRef;

    @Input()
    private values: any = [];

    @Input()
    private options: SparklineOptions = new SparklineOptions();

    constructor() {
    }

    ngOnInit() {
        $(this.selector.nativeElement).sparkline(this.values, this.getOptions());
    }

    getOptions(): SparklineOptions {
        if (!this.options.type) {
            this.options.type = 'bar';
        }

        if (!this.options.height) {
            this.options.height = '20';
        }

        if (!this.options.barWidth) {
            this.options.barWidth = '3';
        }

        if (!this.options.resize) {
            this.options.resize = true;
        }

        if (!this.options.barSpacing) {
            this.options.barSpacing = '3';
        }

        if (!this.options.barColor) {
            this.options.barColor = '#03a9f3';
        }

        return this.options;
    }
}
