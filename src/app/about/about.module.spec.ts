import { TestBed } from '@angular/core/testing';
import { AboutModule } from './about.module';

interface TestContext {
    module: AboutModule;
}

describe('AboutModule', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AboutModule],
        }).compileComponents();

        tc.module = TestBed.inject(AboutModule);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create the module', () => {
        expect(tc.module).toBeTruthy();
    });
});
