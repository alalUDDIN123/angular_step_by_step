import { Component, Input } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-grid',
  template: `
  <h2>Version is {{ version }}</h2>
  <table class="table table-striped table-hover table-sm table-responsive">
      <thead class="table-dark">
        <tr>
          <th>Sl#</th>
          <th>Title</th>
          <th>Photo</th>
          <th>Full Name</th>
          <th>City</th>
          <th>Ticket Price</th>
          <th>Release Date</th>
          <th>Movies List</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let hero of data">
          <td>{{ hero.sl }}</td>
          <td>{{ hero.title }}</td>
          <td>
            <img [src]="hero.poster" [alt]="hero.title" width="50">
          </td>
          <td>{{ hero.firstname+" "+hero.lastname }}</td>
          <td>{{ hero.city }}</td>
          <td>{{ hero.ticketprice | currency : 'INR' : 'symbol' : '3.2-4' }}</td>
          <td>{{ hero.releasedate | date: 'dd/MM/yyyy' }}</td>
          <td>
            <button class="masaibtn btn btn-primary">{{ hero.movieslist.length }}</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
  ]
})
export class GridComponent {
  // @Input() data:any = []
  data:any = [];
  version = 0;
  // hs:HeroService = new HeroService();

  constructor(private hs:HeroService){
    this.data = this.hs.getData();
    this.version = this.hs.getVersion();
  }

}
