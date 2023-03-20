import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { ContactServiceMock } from './contact.service.mock';

interface TestContext {
    component: ContactComponent;
    contactService: ContactService;
}

describe('ContactComponent', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [MatSnackBarModule],
            providers: [ContactComponent, { provide: ContactService, useClass: ContactServiceMock }],
        }).compileComponents();

        tc.component = TestBed.inject(ContactComponent);
        tc.contactService = TestBed.inject(ContactService);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create', () => {
        expect(tc.component).toBeTruthy();
    });
});
