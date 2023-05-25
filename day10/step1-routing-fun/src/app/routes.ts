import { Route, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { BatmanComponent } from "./batman.component";
import { SupermanComponent } from "./superman.component";
import { FlashComponent } from "./flash.component";
import { NotfoundComponent } from "./notfound.component";

let homeroute:Route = { path: "", component : HomeComponent } /* default route */
let batmanroute:Route = { path: "batman", component : BatmanComponent }  /* named route */
let supermanroute:Route = { path: "superman/:qty", component : SupermanComponent }  /* named parameter route */
let flashroute:Route = { path: "flash", component : FlashComponent }/* named route */
let cyborgroute:Route = { path: "cyborg", redirectTo : "batman", pathMatch:"full" } /* route redirection */
let wildcardroute:Route = { path: "**", component : NotfoundComponent } /* wildcard route */

export let routes:Routes = [homeroute, batmanroute, supermanroute, flashroute, cyborgroute, wildcardroute];