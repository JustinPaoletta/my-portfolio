import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';
import { ProjectsServiceMock } from './projects.service.mock';

interface TestContext {
    component: ProjectsComponent;
    projectsService: ProjectsService;
}

describe('ProjectsComponent', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [MatSnackBarModule],
            providers: [ProjectsComponent, { provide: ProjectsService, useClass: ProjectsServiceMock }],
        }).compileComponents();

        tc.component = TestBed.inject(ProjectsComponent);
        tc.projectsService = TestBed.inject(ProjectsService);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create', () => {
        expect(tc.component).toBeTruthy();
    });
});
