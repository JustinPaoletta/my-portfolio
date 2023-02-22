import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { CloseModule } from '../close/close.module';


@NgModule({
  declarations: [ AboutComponent ],
  imports: [
    CommonModule,
    CloseModule
  ]
})
export class AboutModule { }
