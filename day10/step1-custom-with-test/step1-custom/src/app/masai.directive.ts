import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector : "[masai]"
})
export class MasaiDirective {
    // @Input('prop') select:any = "";
    // @Input() title:any = "";
    @Input() masai:any = '';
    constructor(private elRef:ElementRef){
       // empty
    }
    ngOnInit(){
        // this.elRef.nativeElement.style.backgroundColor = "#fedfe5";
        // console.log(this.select);
        // console.log(this.title);
        this.elRef.nativeElement.addEventListener("click", this.clickHandler);
    }
    clickHandler(event:any){
        // event.target.style.backgroundColor = this.masai+"";
        // event.target.style.backgroundColor = this.masai+"";
        console.log(event.target.getAttribute("masai"));
        event.target.style.backgroundColor = event.target.getAttribute("masai")
    }
}

/* 
element directive : 'masai'
ng-template
<ng-template></ng-template>
ng-content
<ng-content></ng-content>

class Directive  : '.masai'

attribute directive : '[masai]'
ngNonbindable
ngIf
ngClass
ngStyle


*/