import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {routing} from './chat-routing.module';
import {ContactListService} from './chat/components/contact-list/contact-list.service';
import {ChatComponent} from './chat/chat.component';
import {ContactListComponent} from './chat/components/contact-list/contact-list.component';
import {ConversationComponent} from './chat/components/conversation/conversation.component';
import {CleanConversationComponent} from './chat/components/clean-conversation/clean-conversation.component';
import {ConversationService} from './chat/components/conversation/conversation.service';
import {CoreService} from '../../core/core.service';

@NgModule({
    imports: [
        routing,
        CommonModule,
        HttpClientModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [
        ChatComponent,
        ContactListComponent,
        ConversationComponent,
        CleanConversationComponent,
    ],
    providers: [
        ContactListService,
        ConversationService,
        CoreService,
    ]
})
export class ChatModule {
}
