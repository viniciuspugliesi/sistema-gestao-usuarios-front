import {inject, TestBed} from '@angular/core/testing';
import {RedirectIfNotAuthenticatedGuard} from './redirect-if-not-authenticated.guard';

describe('RedirectIfAuthenticatedGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [RedirectIfNotAuthenticatedGuard]
        });
    });

    it('should ...', inject([RedirectIfNotAuthenticatedGuard], (guard: RedirectIfNotAuthenticatedGuard) => {
        expect(guard).toBeTruthy();
    }));
});
