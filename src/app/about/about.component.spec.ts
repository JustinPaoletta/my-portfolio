import { TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { AboutService } from './about.service';
import { AboutServiceMock } from './about.service.mock';

interface TestContext {
    component: AboutComponent;
    aboutService: AboutService;
}

describe('AboutComponent', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        TestBed.configureTestingModule({
            providers: [AboutComponent, { provide: AboutService, useClass: AboutServiceMock }]
        }).compileComponents();

        tc.component = TestBed.inject(AboutComponent);
        tc.aboutService = TestBed.inject(AboutService);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create', () => {
        expect(tc.component).toBeTruthy();
    });
});
