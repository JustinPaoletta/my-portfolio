import { EmailCredentials } from "./contact.model";

export class ContactServiceMock {
    getEmailCredentials(): EmailCredentials {
        return {} as EmailCredentials;
    }

    get headerText(): string {
        return '';
    }

    get subTextMessage(): string {
        return '';
    }
}
