import {Inject} from '@angular/core';

@Inject({})
export class MoneyHelper {

    private options: any = {
        minimumFractionDigits: 2,
        // style: 'currency',
        currency: 'BRL',
    };

    toPrice(value: number): string {
        return value.toLocaleString('pt-BR', this.options);
    }
}
