import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PasswordExpiredComponent} from './password-expired.component';

describe('PasswordExpiredComponent', () => {
    let component: PasswordExpiredComponent;
    let fixture: ComponentFixture<PasswordExpiredComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PasswordExpiredComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordExpiredComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
