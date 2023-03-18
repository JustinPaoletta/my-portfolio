import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GhPagesLinkPipeModule } from "../pipes/gh-pages-link.module";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ContactService } from './contact.service';
import { ContactComponent } from './contact.component';
import { CloseModule } from '../close/close.module';


@NgModule({
    declarations: [ContactComponent],
    imports: [CommonModule, CloseModule, FormsModule, GhPagesLinkPipeModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
    providers: [ContactService],
})
export class ContactModule { }
