import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeComponent } from './resume.component';
import { CloseModule } from '../close/close.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatIconModule } from '@angular/material/icon';
import { GhPagesLinkPipeModule } from "../pipes/gh-pages-link.module";

@NgModule({
    declarations: [ResumeComponent],
    imports: [CommonModule, CloseModule, PdfViewerModule, MatIconModule, GhPagesLinkPipeModule]
})
export class ResumeModule {}
