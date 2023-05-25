import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasaiModule } from './masai.module';


@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, MasaiModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
