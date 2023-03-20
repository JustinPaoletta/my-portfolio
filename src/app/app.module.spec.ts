import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';

interface TestContext {
    module: AppModule; 
}

describe('AppModule', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppModule],
        }).compileComponents();

        tc.module = TestBed.inject(AppModule);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create the module', () => {
        expect(tc.module).toBeTruthy();
    });
});
