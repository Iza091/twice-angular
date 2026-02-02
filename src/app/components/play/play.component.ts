import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './play.html',
  styleUrls: ['./play.css']
})
export class PlayComponent {
  songs = [
    { 
      title: 'Like Ooh-Ahh', 
      description: 'El álbum y el video musical se lanzaron el 20 de octubre de 2015.',
      image: 'assets/img/ph-1.jpg',
      color: 'primary',
      imageLeft: true
    },
    { 
      title: 'Yes or Yes', 
      description: 'Yes Or Yes se lanzó el 5 de noviembre de 2018.',
      image: 'assets/img/ph-2.jpg',
      color: 'info',
      imageLeft: false
    },
    { 
      title: 'More & More', 
      description: 'More & More se lanzó el 1 de junio de 2020.',
      image: 'assets/img/ph-3.jpg',
      color: 'danger',
      imageLeft: true
    },
    { 
      title: 'One in a Million', 
      description: '"One in a Million" lanzada en el Twicecoaster: Line 1 y 2.',
      image: 'assets/img/ph-4.jpg',
      color: 'success',
      imageLeft: false
    }
  ];
}

export const Play = PlayComponent;