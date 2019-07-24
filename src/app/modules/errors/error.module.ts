import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {routing} from './error-routing.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {InternalServerErrorComponent} from './internal-server-error/internal-server-error.component';

@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
    ],
    declarations: [
        NotFoundComponent,
        InternalServerErrorComponent,
        UnauthorizedComponent,
        ForbiddenComponent
    ]
})
export class ErrorModule {
}
