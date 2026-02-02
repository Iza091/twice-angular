import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  albums = [
    { 
      image: 'assets/img/card1.png', 
      title: 'Cry For Me',
      description: '"Cry For Me" estilizado como "CRY FOR ME" es un sencillo de Twice. La versión inacabada de la canción se interpretó por primera vez en los Mnet Asian Music Awards 2020. La versión oficial y completa se lanzó el 18 de diciembre de 2020 (KST).'
    },
    { 
      image: 'assets/img/card2.png', 
      title: 'Fake & True',
      description: '"Fake & True" es una canción grabada por el grupo de chicas de Corea del Sur Twice. La canción y su video musical se lanzaron el 18 de octubre de 2019 y el álbum completo & TWICE se lanzó el 20 de noviembre de 2019.'
    },
    { 
      image: 'assets/img/card3.png', 
      title: 'Twicecoaster: Lane 1',
      description: 'Twicecoaster: Lane 1 (estilizado como TWICEcoaster: LANE 1) es la tercera obra extendida (EP) del grupo de chicas surcoreanas Twice. El EP fue lanzado digital y físicamente el 24 de octubre de 2016 por JYP Entertainment y distribuido por KT Music.'
    }
  ];
}