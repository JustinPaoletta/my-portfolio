import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ProjectsComponent } from './projects.component';
import { CloseModule } from '../close/close.module';
import { ProjectsService } from './projects.service';
import { GhPagesLinkPipeModule } from '../pipes/gh-pages-link.module';

@NgModule({
    declarations: [ProjectsComponent],
    imports: [
        GhPagesLinkPipeModule,
        CommonModule,
        CloseModule,
        DragDropModule,
        MatCheckboxModule,
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule,
    ],
    providers: [ProjectsService],
})
export class ProjectsModule {}
