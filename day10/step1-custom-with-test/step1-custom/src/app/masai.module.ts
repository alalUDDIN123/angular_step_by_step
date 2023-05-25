import { NgModule } from "@angular/core";
import { MasaiComp } from "./masai.component";
import { GenPipe } from "./gen.pipe";
import { MasaiDirective } from "./masai.directive";

@NgModule({
    declarations : [MasaiComp, GenPipe, MasaiDirective],
    exports : [MasaiComp, GenPipe, MasaiDirective]
})
export class MasaiModule{

}