import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

import { BannerComponent } from './banner/banner.component';
import { LandingPageComponent } from './landing-page.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { GhPagesLinkPipeModule } from '../pipes/gh-pages-link.module';

@NgModule({
    declarations: [BannerComponent, LandingPageComponent, ButtonsComponent],
    imports: [GhPagesLinkPipeModule, CommonModule, RouterModule, MatButtonModule],
    exports: [LandingPageComponent],
})
export class LandingPageModule {}
