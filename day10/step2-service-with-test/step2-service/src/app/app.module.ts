import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GridComponent } from './grid.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [ AppComponent, NavbarComponent, GridComponent ],
  imports: [ BrowserModule ],
  providers: [ HeroService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
