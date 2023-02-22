import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { CloseModule } from '../close/close.module';


@NgModule({
  declarations: [ ContactComponent ],
  imports: [
    CommonModule,
    CloseModule
  ]
})
export class ContactModule { }
