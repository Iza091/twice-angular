import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Highlight menu item according to visible section using IntersectionObserver
    const links = document.querySelectorAll('#navbar .nav-link');
    const sections = document.querySelectorAll('main > section[id], section[id]');
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (!id) return;
        const link = document.querySelector(`#navbar .nav-link[href="#${id}"]`);
        if (link) {
          if (entry.isIntersecting) {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      });
    }, { threshold: 0.55 });

    sections.forEach(s => observer.observe(s));
  }
}