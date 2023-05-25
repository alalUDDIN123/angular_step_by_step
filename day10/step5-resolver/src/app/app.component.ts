import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Heroes List</h1>
      <ul>
        <li><a [routerLink]="['']">Home</a></li>
        <li><a [routerLink]="['list']">Hero List</a></li>
      </ul>
      <hr>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'step2-master-detail';
}
