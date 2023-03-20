import { TestBed } from '@angular/core/testing';
import { CloseModule } from './close.module';

interface TestContext {
    module: CloseModule;
}

describe('CloseModule', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CloseModule],
        }).compileComponents();

        tc.module = TestBed.inject(CloseModule);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create the module', () => {
        expect(tc.module).toBeTruthy();
    });
});
