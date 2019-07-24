import {Pipe, PipeTransform} from '@angular/core';
import {DateTimeHelper} from '../../helpers/date-time-helper';

@Pipe({
    name: 'parseDate'
})
export class ParseDatePipe implements PipeTransform {

    constructor(private dateTimeHelper: DateTimeHelper) {
    }

    transform(date: any = '', format: string = 'yyyy-mm-dd', display: string = 'dd/mm/yyyy HH:MM:ss'): string {
        return this.dateTimeHelper.formatForParseDate(date, format, display);
    }
}
