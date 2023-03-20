import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ContactComponent } from './contact.component';

interface TestContext {
    component: ContactComponent;
}

describe('ContactComponent', () => {
    let tc: TestContext;

    beforeEach(() => {
        tc = {} as TestContext;
    });

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [MatSnackBarModule],
            providers: [ContactComponent],
        }).compileComponents();

        tc.component = TestBed.inject(ContactComponent);
    });

    afterEach(() => {
        tc = {} as TestContext;
    });

    it('should create', () => {
        expect(tc.component).toBeTruthy();
    });
});
