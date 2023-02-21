import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { LandingPageComponent } from './landing-page.component';
import { ButtonsComponent } from './buttons/buttons.component';



@NgModule({
  declarations: [ BannerComponent, LandingPageComponent, ButtonsComponent ],
  imports: [
    CommonModule
  ],
  exports: [ LandingPageComponent ]
})
export class LandingPageModule { }
