import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DataTableService {

    constructor(private http: HttpClient) {
    }

    getData(): Observable<Array<any>> {
        return this.http.get<Array<any>>('./assets/data/table/datatable.json');
    }
}
