import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RibbonComponent } from './components/ribbon/ribbon.component';
import { GamesComponent } from './components/games/games.component';
import { AmiibosComponent } from './components/amiibos/amiibos.component';
import { PlayComponent } from './components/play/play.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    RibbonComponent,
    GamesComponent,
    AmiibosComponent,
  ],
  imports: [
    BrowserModule,
    PlayComponent,
    FooterComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }