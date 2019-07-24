import {Pipe, PipeTransform} from '@angular/core';
import {DateTimeHelper} from '../../helpers/date-time-helper';

@Pipe({
    name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

    constructor(private dateTimeHelper: DateTimeHelper) {
    }

    transform(timestamp: number, format: string = 'dd/mm/yyyy HH:MM:ss'): string {
        return this.dateTimeHelper.formatForTimestamp(timestamp, format);
    }
}
