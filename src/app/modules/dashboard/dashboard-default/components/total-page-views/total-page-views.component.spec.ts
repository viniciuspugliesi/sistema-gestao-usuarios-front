import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TotalPageViewsComponent} from './total-page-views.component';

describe('TotalPageViewsComponent', () => {
    let component: TotalPageViewsComponent;
    let fixture: ComponentFixture<TotalPageViewsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TotalPageViewsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TotalPageViewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
