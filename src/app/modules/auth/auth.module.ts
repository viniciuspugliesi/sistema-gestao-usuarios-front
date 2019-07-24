import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from './auth-routing.module';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {RegisterComponent} from './register/register.component';
import {UnverifiedComponent} from './unverified/unverified.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {HelpersListComponent} from './components/helpers-list/helpers-list.component';
import {ModalHelpComponent} from './components/helpers-list/components/modal-help/modal-help.component';
import {ModalPrivacyComponent} from './components/helpers-list/components/modal-privacy/modal-privacy.component';
import {ModalTermsOfUseComponent} from './components/helpers-list/components/modal-terms-of-use/modal-terms-of-use.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [
        LoginComponent,
        ForgotPasswordComponent,
        RegisterComponent,
        UnverifiedComponent,
        ResetPasswordComponent,
        HelpersListComponent,
        ModalHelpComponent,
        ModalPrivacyComponent,
        ModalTermsOfUseComponent
    ]
})
export class AuthModule {
}
