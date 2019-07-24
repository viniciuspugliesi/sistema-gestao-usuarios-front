import {Inject} from '@angular/core';

@Inject({})
export class NumberHelper {

    isNumeric(value: any): boolean {
        let er = /[^0-9.]/;
        er.lastIndex = 0;

        return !(er.test(String(value)));
    }
}
