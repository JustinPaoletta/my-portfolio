import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { LandingPageComponent } from './landing-page.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { GhPagesLinkPipe } from '../pipes/gh-pages-link.pipe';


@NgModule({
  declarations: [ BannerComponent, LandingPageComponent, ButtonsComponent, GhPagesLinkPipe ],
  imports: [
    CommonModule
  ],
  exports: [ LandingPageComponent ]
})
export class LandingPageModule { }
