import { TestBed } from '@angular/core/testing';
import { ProjectsModule } from './projects.module';

interface TestContext {
    module: ProjectsModule;
}

describe('ProjectsModule', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProjectsModule],
        }).compileComponents();

        tc.module = TestBed.inject(ProjectsModule);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create the module', () => {
        expect(tc.module).toBeTruthy();
    });
});
