import { TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing-page.component';

interface TestContext {
    component: LandingPageComponent;
}

describe('LandingPageComponent', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [LandingPageComponent],
        }).compileComponents();

        tc.component = TestBed.inject(LandingPageComponent);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create', () => {
        expect(tc.component).toBeTruthy();
    });
});
