import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name: 'formatCurrent'
})

export class FormatCurrentPipe implements PipeTransform {

	public transform(value: any, locale: string = 'pt-BR', options:Object = { style: 'currency', currency: 'BRL' }): any {
		return new Intl.NumberFormat(locale, options).format(value)
	}

}