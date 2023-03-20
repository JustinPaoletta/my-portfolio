import { TestBed } from '@angular/core/testing';
import { GhPagesLinkPipeModule } from './gh-pages-link.module';

interface TestContext {
    module: GhPagesLinkPipeModule;
}

describe('GhPagesLinkPipeModule', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GhPagesLinkPipeModule],
        }).compileComponents();

        tc.module = TestBed.inject(GhPagesLinkPipeModule);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create the module', () => {
        expect(tc.module).toBeTruthy();
    });
});
