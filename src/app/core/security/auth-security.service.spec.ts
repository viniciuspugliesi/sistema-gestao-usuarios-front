import {TestBed} from '@angular/core/testing';

import {AuthSecurityService} from './auth-security.service';

describe('AuthSecurityService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: AuthSecurityService = TestBed.get(AuthSecurityService);
        expect(service).toBeTruthy();
    });
});
