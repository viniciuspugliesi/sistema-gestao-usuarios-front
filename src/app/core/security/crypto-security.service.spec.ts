import {TestBed} from '@angular/core/testing';

import {CryptoSecurityService} from './crypto-security.service';

describe('CryptoSecurityService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: CryptoSecurityService = TestBed.get(CryptoSecurityService);
        expect(service).toBeTruthy();
    });
});
