import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { CloseModule } from '../close/close.module';


@NgModule({
  declarations: [ ProjectsComponent ],
  imports: [
    CommonModule,
    CloseModule
  ],
})
export class ProjectsModule { }
