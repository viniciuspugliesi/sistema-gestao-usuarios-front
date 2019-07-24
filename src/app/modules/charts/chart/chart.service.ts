import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ChartService {

    constructor(private http: HttpClient) {
    }

    getDataLineChart(): any {
        return this.http.get('./assets/data/chart/line-chart.json');
    }

    getDataScatterChart(): any {
        return this.http.get('./assets/data/chart/scatter-chart.json');
    }

    getDataBarChart(): any {
        return this.http.get('./assets/data/chart/bar-chart.json');
    }

    getDataStackedChart(): any {
        return this.http.get('./assets/data/chart/stacked-chart.json');
    }
}
