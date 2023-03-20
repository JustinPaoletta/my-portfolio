import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

interface TestContext {
    component: AppComponent;
}

describe('AppComponent', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [AppComponent],
        }).compileComponents();

        tc.component = TestBed.inject(AppComponent);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create', () => {
        expect(tc.component).toBeTruthy();
    });
});
