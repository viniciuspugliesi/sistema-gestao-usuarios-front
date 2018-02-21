import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormatCurrentPipe } from './pipes/format-current.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { ContactDirective } from './directives/contact.directive';

@NgModule({
	declarations: [
    	AppComponent,
    	ContactFormComponent,
    	FormatCurrentPipe,
    	FormatDatePipe,
    	ContactDirective
  	],
  	
  	imports: [
	    BrowserModule,
        FormsModule
  	],
  	
  	providers: [],

  	bootstrap: [AppComponent]
})

export class AppModule { }