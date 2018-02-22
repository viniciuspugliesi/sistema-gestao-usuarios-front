import { Routes } from '@angular/router'
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AddressComponent } from './address/address.component';

export const routes:Routes = [
	{path: 'contacts', component: ContactListComponent},
	{path: 'contacts/create', component: ContactFormComponent},
	{path: 'search-for-area-code', component: AddressComponent},
]