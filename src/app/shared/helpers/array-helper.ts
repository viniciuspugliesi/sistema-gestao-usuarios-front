export class ArrayHelper {

    constructor() {
    }

    inArray(value: any, array: Array<any>): boolean {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return true;
            }
        }

        return false;
    }

    notInArray(value: any, array: Array<any>): boolean {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return false;
            }
        }

        return true;
    }
}
