import { Component, OnInit } from '@angular/core';
import { Address } from './address';
import { AddressService } from '../services/address.service';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css']
})

export class AddressComponent implements OnInit {

    public address:Address = new Address()

    private loading:boolean = false

    public constructor(private addressService:AddressService) { }

    public ngOnInit() { }

    public search() {
        this.loading = true

        this.addressService.search(this.address.cep)
                           .then((address:Address) => {
                               this.address = address
                               this.loading = false
                           })
                           .catch(() => {
                               this.handlerError()
                               this.loading = false
                           })
    }

    private handlerError() {
        alert('Não foi possível encontrar o endereço')

        let cep = this.address.cep

        this.address = new Address()
        this.address.cep = cep
    }
}