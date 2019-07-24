import {Pipe, PipeTransform} from '@angular/core';
import {MoneyHelper} from '../../helpers/money-helper';

@Pipe({
    name: 'price'
})
export class PricePipe implements PipeTransform {

    constructor(private moneyHelper: MoneyHelper) {
    }

    transform(value: number = 0): string {
        return this.moneyHelper.toPrice(value);
    }
}
