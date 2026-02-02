import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { GamesComponent } from './components/games/games.component';
import { AmiibosComponent } from './components/amiibos/amiibos.component';
import { PlayComponent } from './components/play/play.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    CarouselComponent,
    RibbonComponent,
    GamesComponent,
    AmiibosComponent,
    PlayComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'twice-angular';
}