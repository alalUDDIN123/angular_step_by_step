import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { HeroesService } from './heroes.service';

@Component({
  template: `
    <a [routerLink]="['']">Back to Master Page</a>
    <h2>{{ selectedHero.name }} : Power {{ selectedHero.powerstats.power }}</h2>
    <img [src]="'assets/'+selectedHero.image.url" [alt]="selectedHero.name"  width="150" >
    <p>
      {{ selectedHero | json }}
    </p>
  `,
  styles: [
  ]
})
export class DetailComponent implements OnInit {
  selectedHero:any;
  // constructor(private hs:HeroesService, private ar:ActivatedRoute ) { }
  constructor(private ar:ActivatedRoute) { }

  ngOnInit(): void {
    // this.selectedHero = this.hs.getSelectedHero(this.ar.snapshot.params['selectedHeroId'])
    this.ar.data.subscribe( res => {
      this.selectedHero = res["singleherodata"];
    })
  }

}
