import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'numberToHour'
})
export class NumberToHourPipe implements PipeTransform {

    transform(time: number): string {
        let hour = Number.parseInt((time / 60 / 60).toString().split('.')[0]);
        let min = Number.parseInt(((time - (hour * 60 * 60)) / 60).toString()).toString().padStart(2, '0');
        let horaFormatada = hour + ':' + min;
        return horaFormatada;
    }

}
