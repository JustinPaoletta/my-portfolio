import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { CloseComponent } from './close.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CloseComponent],
    imports: [CommonModule, RouterModule, MatIconModule],
    exports: [CloseComponent],
})
export class CloseModule {}
