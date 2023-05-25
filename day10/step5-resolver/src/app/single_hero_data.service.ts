import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { HeroesService } from "./heroes.service";
 
@Injectable()
export class SingleHeroDataService{
    constructor(private hs:HeroesService){}
    resolve( route:ActivatedRouteSnapshot ){
        console.log(route);
        return this.hs.getSelectedHero(route.params['selectedHeroId'])
    }
}