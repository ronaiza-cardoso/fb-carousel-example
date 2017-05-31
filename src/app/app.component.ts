import { Component } from '@angular/core';

import { FbCarousel } from 'fb-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

    banners: any[] = [
    { id: 0, bg: './assets/banner.jpg', title: 'Banner 1', exibir_title: false },
    { id: 1, bg: './assets/banner.jpg', title: 'Banner 2', exibir_title: false },
    { id: 2, bg: './assets/banner.jpg', title: 'Banner 3', exibir_title: false },
    { id: 3, bg: './assets/banner.jpg', title: 'Banner 4', exibir_title: false },
  ];

  arrows: any = {
    left: '/assets/left.svg',
    right: '/assets/right.svg'
  }

}
