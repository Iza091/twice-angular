// carousel.component.ts
import { Component } from '@angular/core';

interface CarouselSlide {
  src: string;
  alt: string;
  active: boolean;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  slides: CarouselSlide[] = [
    { src: 'assets/img/s1.jpg', alt: 'Slide 1', active: true },
    { src: 'assets/img/s2.jpg', alt: 'Slide 2', active: false },
    { src: 'assets/img/s3.jpg', alt: 'Slide 3', active: false }
  ];
}