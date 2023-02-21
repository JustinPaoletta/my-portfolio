import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { LandingPageComponent } from './landing-page.component';



@NgModule({
  declarations: [ BannerComponent, LandingPageComponent ],
  imports: [
    CommonModule
  ],
  exports: [ LandingPageComponent ]
})
export class LandingPageModule { }
