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

    public constructor(private addressService:AddressService) { }

    public ngOnInit() { }

    public search() {
        this.addressService.search(this.address.cep).then((address:Address) => this.address = address)
    }
}