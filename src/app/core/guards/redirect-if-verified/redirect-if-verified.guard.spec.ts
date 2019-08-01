import {inject, TestBed} from '@angular/core/testing';

import {RedirectIfVerifiedGuard} from './redirect-if-verified.guard';

describe('RedirectIfVerifiedGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RedirectIfVerifiedGuard]
        });
    });

    it('should ...', inject([RedirectIfVerifiedGuard], (guard: RedirectIfVerifiedGuard) => {
        expect(guard).toBeTruthy();
    }));
});
