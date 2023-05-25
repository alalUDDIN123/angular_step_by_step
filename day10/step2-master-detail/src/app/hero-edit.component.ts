import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    template : `
    <div class="card">
        <div class="card-body">
            <h2 class="card-title">Hero to Update : {{ heroToEdit }}</h2>
            <h3>Update power to: {{ herosNewPower }}</h3>
        </div>
    </div>
    `
})
export class HeroEditComp{
    heroToEdit:any;
    herosNewPower:any;
    constructor( private ar:ActivatedRoute ){}
    ngOnInit(){
       this.heroToEdit = this.ar.snapshot.params['hname'];
       /* 
       */
       this.ar.params.subscribe( rparam => {
           this.heroToEdit = rparam['hname']   
           this.herosNewPower = rparam['power']
       }); 
        /* 
        this.heroToEdit = this.ar.snapshot.params['hname'];
        this.herosNewPower = this.ar.snapshot.params['power']; 
        */
    }
}