// src/app/app.component.ts
import { Component } from '@angular/core';
import { AmiibosComponent } from "./components/amiibos/amiibos.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GamesComponent } from "./components/games/games.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RibbonComponent } from "./components/ribbon/ribbon.component";
import { PlayComponent } from "./components/play/play.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [AmiibosComponent, CarouselComponent, FooterComponent, GamesComponent, NavbarComponent, RibbonComponent, PlayComponent]
})
export class AppComponent {
  title = 'twice-angular';
}