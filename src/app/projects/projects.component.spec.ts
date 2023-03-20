import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ProjectsComponent } from './projects.component';

interface TestContext {
    component: ProjectsComponent;
}

describe('ProjectsComponent', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [MatSnackBarModule],
            providers: [ProjectsComponent],
        }).compileComponents();

        tc.component = TestBed.inject(ProjectsComponent);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create', () => {
        expect(tc.component).toBeTruthy();
    });
});
