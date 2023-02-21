import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  macbook: string = '../assets/macbook.png';
  
  ngOnInit(): void {
    if (!isDevMode()) {
      this.macbook = './assets/macbook.png';
    }
  } 
}
