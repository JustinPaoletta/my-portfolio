import { TestBed } from '@angular/core/testing';

import { CloseComponent } from './close.component';

interface TestContext {
    component: CloseComponent;
}

describe('CloseComponent', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [CloseComponent],
        }).compileComponents();

        tc.component = TestBed.inject(CloseComponent);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create', () => {
        expect(tc.component).toBeTruthy();
    });
});
