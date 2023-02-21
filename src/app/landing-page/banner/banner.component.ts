import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  medium: string = '../assets/medium.png';
  github: string = '../assets/github.svg';
  linkedIn: string = '../assets/linkedin.png'; 
  
  ngOnInit(): void {
    if (!isDevMode()) {
      this.medium = './assets/medium.png';
      this.github = './assets/github.svg';
      this.linkedIn = './assets/linkedin.png';
    }
  }

}
