import { TestBed } from '@angular/core/testing';
import { ContactModule } from './contact.module';

interface TestContext {
    module: ContactModule;
}

describe('ContactModule', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContactModule],
        }).compileComponents();

        tc.module = TestBed.inject(ContactModule);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create the module', () => {
        expect(tc.module).toBeTruthy();
    });
});
