import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsComponent} from './modules/forms/forms.component';
import {UiElementsComponent} from './modules/ui-elements/ui-elements.component';
import {PageBlankComponent} from './modules/page-blank/page-blank.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        PageBlankComponent,
        UiElementsComponent,
        FormsComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        CoreModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
