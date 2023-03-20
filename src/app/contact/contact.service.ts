import { Injectable } from '@angular/core';
import { EmailCredentials } from './contact.model';

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    header: string;
    subText: string;

    private emailCredentials: EmailCredentials;

    constructor() {
        // For a client side email service. This is done for free hosting purposes. If this was for any type of paid service
        // The keys should never be exposed in the Frontend code and would instead be stored on an email server that would
        // also handle the sending of the email. There is no risk here because no card is tied to the account and I am on a free
        // plan available to anyone who signs up with emailjs 
        this.header = 'Get in Touch';
        this.subText = "Have an employment opportunity or just wanna say hi? I'd, love to hear from you!";
        this.emailCredentials = {
            service: 'service_osxddoh',
            template: 'template_tx6w7wi',
            pubKey: '44ZE_oZzprFblFuGn'
        }
    }

    getEmailCredentials(): EmailCredentials {
        return this.emailCredentials;
    }

    get headerText(): string {
        return this.header;
    }

    get subTextMessage(): string {
        return this.subText;
    }
}
