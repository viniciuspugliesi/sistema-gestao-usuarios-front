import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutDefaultComponent} from './core/layouts/layout-default/layout-default.component';
import {RedirectIfNotAuthenticatedGuard} from './core/guards/redirect-if-not-authenticated/redirect-if-not-authenticated.guard';
import {RedirectIfAuthenticatedGuard} from './core/guards/redirect-if-authenticated/redirect-if-authenticated.guard';
import {LayoutCleanComponent} from './core/layouts/layout-clean/layout-clean.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {
        path: '', data: {base: true}, component: LayoutCleanComponent, canActivate: [RedirectIfAuthenticatedGuard], children: [
            {path: '', loadChildren: './modules/auth/auth.module#AuthModule'},
            {path: 'error', loadChildren: './modules/errors/error.module#ErrorModule'},
        ]
    },
    {
        path: '', data: {base: true}, component: LayoutDefaultComponent, canActivate: [RedirectIfNotAuthenticatedGuard], children: [
            {path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
            {path: 'emails', loadChildren: './modules/email/email.module#EmailModule'},
            {path: 'chat', loadChildren: './modules/chat/chat.module#ChatModule'},
            {path: 'profile', loadChildren: './modules/profile/profile.module#ProfileModule'},
            {path: 'logs', loadChildren: './modules/logs/logs.module#LogsModule'},
        ]
    },
    {path: '**', redirectTo: '/error/404'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
