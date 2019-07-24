import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TotalVisitsComponent} from './total-visits.component';

describe('TotalVisitsComponent', () => {
    let component: TotalVisitsComponent;
    let fixture: ComponentFixture<TotalVisitsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TotalVisitsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TotalVisitsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
