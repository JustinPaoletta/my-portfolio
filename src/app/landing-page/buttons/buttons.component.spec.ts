import { TestBed } from '@angular/core/testing';

import { ButtonsComponent } from './buttons.component';

interface TestContext {
    component: ButtonsComponent;
}

describe('ButtonsComponent', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [ButtonsComponent],
        }).compileComponents();

        tc.component = TestBed.inject(ButtonsComponent);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create', () => {
        expect(tc.component).toBeTruthy();
    });
});
