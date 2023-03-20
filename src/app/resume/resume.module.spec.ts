import { TestBed } from '@angular/core/testing';
import { ResumeModule } from './resume.module';

interface TestContext {
    module: ResumeModule;
}

describe('ResumeModule', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ResumeModule],
        }).compileComponents();

        tc.module = TestBed.inject(ResumeModule);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create the module', () => {
        expect(tc.module).toBeTruthy();
    });
});
