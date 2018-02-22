import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import 'rxjs/add/operator/toPromise'
import { Address } from '../address/address';

@Injectable()
export class AddressService {

	private url:string = 'https://viacep.com.br/ws/{areaCode}/json'

	public constructor(private http:HttpClient) { }

	public search(areaCode:string) {
		let url = this.url.replace('{areaCode}', areaCode)

		return this.http.get(url)
						.toPromise()
						.then(response => this.handlerResponse(response))
	}

	private handlerResponse(response):Address {
		let address = new Address()

		address.cep = response.cep
		address.street = response.logradouro
		address.complement = response.complemento
		address.district = response.bairro
		address.city = response.localidade
		address.state = response.uf

		return address
	}
}