import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'formatDate'
})

export class FormatDatePipe implements PipeTransform {

	public transform(value: any, locale:string = 'pt-BR'): any {
		if (value.length !== 10) {
			return value
		}

		let date = new Date(value)

		if (!date) {
			return value
		}

		return new Intl.DateTimeFormat(locale).format(date);
	}

}