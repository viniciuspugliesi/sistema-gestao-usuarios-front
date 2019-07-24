import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from './maps-routing.module';
import {FormsModule} from '@angular/forms';
import {GoogleMapsComponent} from './google-maps/google-maps.component';


@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule
    ],
    declarations: [
        GoogleMapsComponent,
    ]
})
export class MapsModule {
}
