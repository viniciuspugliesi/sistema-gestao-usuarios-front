import {inject, TestBed} from '@angular/core/testing';

import {RedirectIfNotVerifiedGuard} from './redirect-if-not-verified.guard';

describe('RedirectIfVerifiedGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RedirectIfNotVerifiedGuard]
        });
    });

    it('should ...', inject([RedirectIfNotVerifiedGuard], (guard: RedirectIfNotVerifiedGuard) => {
        expect(guard).toBeTruthy();
    }));
});
