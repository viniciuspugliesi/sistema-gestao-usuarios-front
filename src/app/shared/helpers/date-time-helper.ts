import {Inject} from '@angular/core';
import moment = require('moment');

declare let require: any;
let dateFormat = require('dateformat');

@Inject({})
export class DateTimeHelper {

    public dayNames: Array<string> = [
        'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab',
        'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'
    ];

    public monthNames: Array<string> = [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    public timeNames: Array<string> = [
        'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
    ];

    constructor() {
        dateFormat.i18n = {
            dayNames: this.dayNames,
            monthNames: this.monthNames,
            timeNames: this.timeNames
        };
    }

    public formatForTimestamp(timestamp: number, format: string = 'dd/mm/yyyy HH:MM:ss'): string {
        if (!timestamp) {
            return '';
        }

        let date = new Date(timestamp);

        return dateFormat(date, format);
    }

    public formatForParseDate(date: any = '', format: string = 'yyyy-mm-dd', display: string = 'dd/mm/yyyy HH:MM:ss'): string {
        if (!date) {
            return '';
        }

        let parts = date.match(/(\d+)/g);
        let i = 0;
        let fmt = {};

        format.replace(/(yyyy|dd|mm)/g, (part) => {
            fmt[part] = i++;
            return '';
        });

        let newDate = new Date(parts[fmt['yyyy']], parts[fmt['mm']] - 1, parts[fmt['dd']]);

        return dateFormat(newDate, display);
    }

    public isBeforeNow(date: string): boolean {
        return moment(date).isBefore(moment());
    }
}
