import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BounceRateComponent} from './bounce-rate.component';

describe('BounceRateComponent', () => {
    let component: BounceRateComponent;
    let fixture: ComponentFixture<BounceRateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BounceRateComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BounceRateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
