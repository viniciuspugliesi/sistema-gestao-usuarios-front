import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from './email-routing.module';
import {InboxComponent} from './inbox/inbox.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {ComposeComponent} from './compose/compose.component';
import {NavComponent} from './components/nav/nav.component';

@NgModule({
    imports: [
        routing,
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [
        InboxComponent,
        ComposeComponent,
        NavComponent
    ]
})
export class EmailModule {
}
