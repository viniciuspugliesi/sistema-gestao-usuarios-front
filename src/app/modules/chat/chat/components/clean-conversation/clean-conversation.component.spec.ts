import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CleanConversationComponent} from './clean-conversation.component';

describe('CleanConversationComponent', () => {
    let component: CleanConversationComponent;
    let fixture: ComponentFixture<CleanConversationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CleanConversationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CleanConversationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
