import {TestBed} from '@angular/core/testing';

import {NavRightService} from './nav-right.service';

describe('NavRightService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: NavRightService = TestBed.get(NavRightService);
        expect(service).toBeTruthy();
    });
});
