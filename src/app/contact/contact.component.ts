import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { EmailCredentials } from './contact.model';
import { ContactService } from './contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
    form: FormGroup;
    emailCreds: EmailCredentials;

    private _snackBar: MatSnackBar = inject(MatSnackBar);
    private contactService = inject(ContactService);

    ngOnInit(): void {
        this.initForm();
        this.emailCreds = this.contactService.getEmailCredentials();
    }

    ngOnDestroy(): void {
        this._snackBar.dismiss();
    }

    initForm(): void {
        this.form = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.email, Validators.required]),
            message: new FormControl('', Validators.required)
        });
    }

    sendEmail(e: Event, formDirective: FormGroupDirective) {
        emailjs.sendForm(this.emailCreds.service, this.emailCreds.template, e.target as HTMLFormElement, this.emailCreds.pubKey)
            .then((result: EmailJSResponseStatus) => {
                this._snackBar.open('Your email was successfully sent, Thank you for reaching out!', 'DISMISS');
                this.form.reset();
                // Have to reset formDirective so that Validators are also reset
                formDirective.resetForm();
            }, (error: { text: any; }) => {
                this._snackBar.open('There was an error sending your email, please try again!', 'DISMISS');
            });
    }
}
