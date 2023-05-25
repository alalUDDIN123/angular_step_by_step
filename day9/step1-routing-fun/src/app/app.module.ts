import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { BatmanComponent } from './batman.component';
import { SupermanComponent } from './superman.component';
import { FlashComponent } from './flash.component';
import { NotfoundComponent } from './notfound.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BatmanComponent,
    SupermanComponent,
    FlashComponent,
    NotfoundComponent
  ],
  imports: [
/*     BrowserModule, RouterModule.forRoot([
      {  path: "",         component : HomeComponent },
      {  path: "batman",   component : BatmanComponent },
      {  path: "superman/:qty", component : SupermanComponent },
      {  path: "flash",    component : FlashComponent },
      {  path: "**",       component : NotfoundComponent }
    ])
  ], */
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
