import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {UnverifiedComponent} from './unverified/unverified.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'create-account', component: RegisterComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'reset-password', component: ResetPasswordComponent},
    {path: 'email-unverified', component: UnverifiedComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
