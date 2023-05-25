import { Component } from "@angular/core";
@Component({
    selector : "app-masai",
    template : `
    <div [style.backgroundColor]="selectedColor" style="width: 200px; height: 200px; border: 2px solid grey; float: left; margin: 10px; padding: 10px;">
        <input #colRef type="color" (change)="changeColor(colRef.value)">
    </div>
    `
})
export class MasaiComp{
    selectedColor:any = '';

    changeColor(col:any){
        this.selectedColor = col;
    }
}