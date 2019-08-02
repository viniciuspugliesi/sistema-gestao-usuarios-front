import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {UnverifiedComponent} from './unverified/unverified.component';
import {RedirectIfAuthenticatedGuard} from '../../core/guards/redirect-if-authenticated/redirect-if-authenticated.guard';
import {RedirectIfVerifiedGuard} from '../../core/guards/redirect-if-verified/redirect-if-verified.guard';
import {LogoutComponent} from './logout/logout.component';
import {EmailVerificationComponent} from './email-verification/email-verification.component';

const routes: Routes = [
    {path: 'logout', component: LogoutComponent},
    {path: 'email-verification', component: EmailVerificationComponent},
    {
        path: '', canActivate: [RedirectIfAuthenticatedGuard], children: [
            {path: 'login', component: LoginComponent},
            {path: 'create-account', component: RegisterComponent},
            {path: 'forgot-password', component: ForgotPasswordComponent},
            {path: 'reset-password', component: ResetPasswordComponent},
        ]
    },
    {
        path: '', canActivate: [RedirectIfVerifiedGuard], children: [
            {path: 'email-unverified', component: UnverifiedComponent},
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
