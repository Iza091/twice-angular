import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare const bootstrap: any;

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements AfterViewInit {
  slides = [
    { src: 'assets/img/s1.jpg', alt: 'Slide 1', active: true },
    { src: 'assets/img/s2.jpg', alt: 'Slide 2', active: false },
    { src: 'assets/img/s3.jpg', alt: 'Slide 3', active: false }
  ];

  ngAfterViewInit() {
    // Ensure Bootstrap carousel is initialized for dynamically loaded content
    if (typeof (window as any).bootstrap !== 'undefined' || typeof bootstrap !== 'undefined') {
      const el = document.getElementById('carouselExampleIndicators');
      if (el && (window as any).bootstrap?.Carousel) {
        try {
          // eslint-disable-next-line no-new
          new (window as any).bootstrap.Carousel(el, { interval: 4000, ride: 'carousel' });
        } catch (e) {
          // ignore initialization errors
          // console.warn('Carousel init failed', e);
        }
      }
    }
  }
}