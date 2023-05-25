import { Component, Input } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-navbar',
  template: `
   <h2>Version is {{ version }}</h2>
      <ul class="nav justify-content-center">
        <li class="nav-item" *ngFor="let hero of data">
          <a class="nav-link"  href="#">{{ hero.title }}</a>
        </li>
      </ul>
  `,
  styles: [
  ]
})
export class NavbarComponent {
 //  @Input() data:any = []
  data:any = [];
  version = 0;
 //  hs:HeroService = new HeroService();
  constructor(private hs:HeroService){
    this.data = this.hs.getData();
    this.version = this.hs.getVersion();
  }
}
