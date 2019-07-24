import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'minNumber'
})
export class MinNumberPipe implements PipeTransform {

    transform(value: number, min: number): number {
        return (value < min) ? min : value;
    }
}
