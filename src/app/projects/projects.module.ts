import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { ProjectsComponent } from './projects.component';
import { CloseModule } from '../close/close.module';


@NgModule({
  declarations: [ ProjectsComponent ],
  imports: [
    CommonModule,
    CloseModule,
    DragDropModule,
    MatCheckboxModule
  ],
})
export class ProjectsModule { }
