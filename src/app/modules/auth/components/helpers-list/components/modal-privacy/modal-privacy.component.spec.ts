import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalPrivacyComponent} from './modal-privacy.component';

describe('ModalPrivacyComponent', () => {
    let component: ModalPrivacyComponent;
    let fixture: ComponentFixture<ModalPrivacyComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModalPrivacyComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalPrivacyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
