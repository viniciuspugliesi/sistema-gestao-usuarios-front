import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from './profile-routing.module';
import {FormsModule} from '@angular/forms';
import {EditComponent} from './edit/edit.component';
import {DetailsComponent} from './details/details.component';
import {HeaderComponent} from './components/header/header.component';


@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule
    ],
    declarations: [EditComponent, DetailsComponent, HeaderComponent]
})
export class ProfileModule {
}
