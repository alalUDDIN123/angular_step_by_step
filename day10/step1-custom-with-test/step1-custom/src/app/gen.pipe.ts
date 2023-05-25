import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : "gen"
})
export class GenPipe implements PipeTransform{
   transform(...args:any) {
        return args[1] == "male" ? "Mr "+args[0] : "Miss "+args[0];
   }
}