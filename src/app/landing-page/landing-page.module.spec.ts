import { TestBed } from '@angular/core/testing';
import { LandingPageModule } from './landing-page.module';

interface TestContext {
    module: LandingPageModule;
}

describe('LandingPageModule', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LandingPageModule],
        }).compileComponents();

        tc.module = TestBed.inject(LandingPageModule);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create the module', () => {
        expect(tc.module).toBeTruthy();
    });
});
