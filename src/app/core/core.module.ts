import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {CoreService} from './core.service';
import {LayoutDefaultComponent} from './layouts/layout-default/layout-default.component';
import {LayoutCleanComponent} from './layouts/layout-clean/layout-clean.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './layouts/components/footer/footer.component';
import {FullLoaderComponent} from './layouts/components/loaders/full-loader/full-loader.component';
import {NavComponent} from './layouts/components/nav/nav.component';
import {HeaderComponent} from './layouts/components/header/header.component';
import {LocalLoaderComponent} from './layouts/components/loaders/local-loader/local-loader.component';
import {RedirectIfAuthenticatedGuard} from './guards/redirect-if-authenticated/redirect-if-authenticated.guard';
import {CryptoSecurityService} from './security/crypto-security.service';
import {APIInterceptor, HTTPStatus} from './interceptors/api-interceptor';
import {RedirectIfNotAuthenticatedGuard} from './guards/redirect-if-not-authenticated/redirect-if-not-authenticated.guard';
import {AuthSecurityService} from './security/auth-security.service';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        BrowserModule,
        HttpClientModule,
        SharedModule,
        RouterModule,
    ],
    declarations: [
        LayoutDefaultComponent,
        LayoutCleanComponent,
        FooterComponent,
        FullLoaderComponent,
        NavComponent,
        HeaderComponent,
        LocalLoaderComponent
    ],
    providers: [
        HTTPStatus,
        APIInterceptor,
        CoreService,
        RedirectIfAuthenticatedGuard,
        RedirectIfNotAuthenticatedGuard,
        AuthSecurityService,
        CryptoSecurityService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: APIInterceptor,
            multi: true,
        },
    ]
})
export class CoreModule {
}
