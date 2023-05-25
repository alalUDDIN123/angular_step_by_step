import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  template: `
  <div class="mb-3">
    <label for="searchfield" class="form-label">Search</label>
    <input type="search" [(ngModel)]="filterby" class="form-control" id="searchfield" >
    <hr>
  </div>
     <table class="table table-striped">
       <thead>
         <tr>
           <th>Sl #</th>
           <th>Title</th>
           <th>Full Name</th>
           <th>More Detail</th>
         </tr>
       </thead>
       <tbody>
         <tr *ngFor="let hero of heroeslist | heroFilter : filterby">
           <td>{{ hero?.id }}</td>
           <td>{{ hero?.name }}</td>
           <td>{{ hero?.biography['full-name'] }}</td>
           <td>
             <a 
             [routerLink]="['hero',{username:'Vijay', city : 'Bangalore', country : 'India' }]" 
             [queryParams]="{ hid: hero.id, filterOn : filterby }">Click For Detail</a>
           </td>
         </tr>
       </tbody>
     </table>
  `,
  styles: [
  ]
})
export class MasterComponent implements OnInit {
  heroeslist:any;
  filterby:any = '';
  constructor( private hs:HeroesService, private ar:ActivatedRoute ) { }

  ngOnInit(): void {
    this.heroeslist = this.hs.getHeroes();
    this.filterby = this.ar.snapshot.queryParams['filterOn'];
  }

}
