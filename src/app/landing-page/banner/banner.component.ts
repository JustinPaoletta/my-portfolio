import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  github: string = '../assets/github.svg';
  medium: string = '../assets/medium.png';
  linkedIn: string = '../assets/linkedin.png';
   
}
