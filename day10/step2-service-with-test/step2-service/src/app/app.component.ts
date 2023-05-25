import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <div style="text-align:center">
      <h1> Introduction to Services </h1>
  </div>
  <!-- <app-navbar [data]="herodata"></app-navbar> -->
  <app-navbar></app-navbar>
  <hr>
  <!-- <app-grid [data]="herodata"></app-grid> -->
  <app-grid></app-grid>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'step1-custom';
  herodata:any = [];
  // hs:HeroService = new HeroService();
  /* 
  constructor(private hs:HeroService){
  // empty
  }
  ngOnInit(){
    this.herodata = this.hs.getData();
  } 
  */

 
}
