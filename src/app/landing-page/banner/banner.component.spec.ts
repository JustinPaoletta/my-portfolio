import { TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

interface TestContext {
    component: BannerComponent;
}

describe('BannerComponent', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [BannerComponent],
        }).compileComponents();

        tc.component = TestBed.inject(BannerComponent);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create', () => {
        expect(tc.component).toBeTruthy();
    });
});
