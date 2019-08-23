import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        CoreModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
