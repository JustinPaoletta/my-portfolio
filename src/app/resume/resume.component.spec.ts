import { TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';

interface TestContext {
    component: ResumeComponent;
}

describe('ResumeComponent', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            providers: [ResumeComponent],
        }).compileComponents();

        tc.component = TestBed.inject(ResumeComponent);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create', () => {
        expect(tc.component).toBeTruthy();
    });
});
