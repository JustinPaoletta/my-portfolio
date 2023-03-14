import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { CloseModule } from '../close/close.module';
import { GhPagesLinkPipeModule } from "../pipes/gh-pages-link.module";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, CloseModule, GhPagesLinkPipeModule, MatCardModule, MatIconModule]
})
export class AboutModule {}
