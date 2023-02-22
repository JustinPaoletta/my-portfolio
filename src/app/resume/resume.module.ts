import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeComponent } from './resume.component';
import { CloseModule } from '../close/close.module';


@NgModule({
  declarations: [ ResumeComponent ],
  imports: [
    CommonModule,
    CloseModule
  ]
})
export class ResumeModule { }
