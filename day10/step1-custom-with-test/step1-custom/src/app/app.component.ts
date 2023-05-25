import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <div style="text-align:center">
      <h1>  Custom Pipes Directive and Module </h1>
    </div>
    <table class="table table-striped table-hover table-sm table-responsive">
      <thead class="table-dark">
        <tr>
          <th>Sl#</th>
          <th>Title</th>
          <th>Photo</th>
          <th>Full Name</th>
          <th>City</th>
          <th>Ticket Price</th>
          <th>Release Date</th>
          <th>Movies List</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let hero of heroes">
          <td>{{ hero.sl }}</td>
          <td>{{ hero.title | gen : hero.gender }}</td>
          <td>
            <img [src]="hero.poster" [alt]="hero.title" width="50">
          </td>
          <td>{{ hero.firstname+" "+hero.lastname | gen : hero.gender }}</td>
          <td>{{ hero.city }}</td>
          <td>{{ hero.ticketprice | currency : 'INR' : 'symbol' : '3.2-4' }}</td>
          <td>{{ hero.releasedate | date: 'dd/MM/yyyy' }}</td>
          <td>
            <button class="masaibtn btn btn-primary">{{ hero.movieslist.length }}</button>
          </td>
        </tr>
      </tbody>
    </table>
    <hr>
    <app-masai></app-masai>
    <app-masai></app-masai>
    <app-masai></app-masai>
    <app-masai></app-masai>
    <hr>
    <!-- This snippet is for Element  Directive
    <masai prop="hello" title="vijay">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab, suscipit delectus ipsa natus ipsum obcaecati. Eveniet labore amet et dolore reprehenderit natus quis, velit molestiae, cum cumque, maxime vel!
      </p>
    </masai>
    <br>
    <masai prop="ola" title="batman">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet temporibus molestias accusamus et voluptas tempora corporis ullam facilis labore maiores assumenda sequi expedita tempore sed non inventore, fugit quidem quibusdam?
      </p>
    </masai>
    <br>
    <masai prop="hi" title="ironman">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo asperiores ipsam ratione tempore provident nihil modi blanditiis, minus molestiae saepe! Recusandae omnis possimus natus vero. Distinctio vitae fugit consequuntur.
      </p>
    </masai> 
    -->

   <!--  
    <p class="masai">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab, suscipit delectus ipsa natus ipsum obcaecati. Eveniet labore amet et dolore reprehenderit natus quis, velit molestiae, cum cumque, maxime vel!
    </p>
    <p class="masai">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet temporibus molestias accusamus et voluptas tempora corporis ullam facilis labore maiores assumenda sequi expedita tempore sed non inventore, fugit quidem quibusdam?
    </p>
    <p class="masai">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo asperiores ipsam ratione tempore provident nihil modi blanditiis, minus molestiae saepe! Recusandae omnis possimus natus vero. Distinctio vitae fugit consequuntur.
    </p> 
  -->
  <div style="clear: both;"></div>
    <p masai="red">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ab, suscipit delectus ipsa natus ipsum obcaecati. Eveniet labore amet et dolore reprehenderit natus quis, velit molestiae, cum cumque, maxime vel!
    </p>
    <p masai="orange">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet temporibus molestias accusamus et voluptas tempora corporis ullam facilis labore maiores assumenda sequi expedita tempore sed non inventore, fugit quidem quibusdam?
    </p>
    <p masai="yellow">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quo asperiores ipsam ratione tempore provident nihil modi blanditiis, minus molestiae saepe! Recusandae omnis possimus natus vero. Distinctio vitae fugit consequuntur.
    </p> 

  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'step1-custom';
  heroes = [{
    "sl": 1,
    "title": "Batman",
    "gender": "male",
    "firstname": "Bruce",
    "lastname": "Wayne",
    "city": "Gotham",
    "ticketprice": 123.4567,
    "releasedate": "1/26/2018",
    "poster": "assets/images/batman.jpg",
    "movieslist": [
        {
            "title": "Batman Begins",
            "poster": "assets/images/bat1_tn.jpg"
        }, {
            "title": "Dark Knight",
            "poster": "assets/images/bat2_tn.jpg"
        }, {
            "title": "Dark Knight Raises",
            "poster": "assets/images/bat3_tn.jpg"
        }
    ]

},
{
    "sl": 2,
    "title": "Superman",
    "gender": "male",
    "firstname": "Clark",
    "lastname": "Kent",
    "city": "Metropolis",
    "ticketprice": 178.6789,
    "releasedate": "1/27/2018",
    "poster": "assets/images/superman.jpg",
    "movieslist": [
        {
            "title": "Superman The Movie",
            "poster": "assets/images/super1_tn.jpg"
        }, {
            "title": "Superman Returns",
            "poster": "assets/images/super2_tn.jpg"
        }, {
            "title": "Superman Man of Steel",
            "poster": "assets/images/super3_tn.jpg"
        }
    ]

},
{
    "sl": 3,
    "title": "Ironman",
    "gender": "male",
    "firstname": "Tony",
    "lastname": "Stark",
    "city": "New York",
    "ticketprice": 122,
    "releasedate": "1/27/2018",
    "poster": "assets/images/ironman.jpg",
    "movieslist": [
        {
            "title": "Ironman",
            "poster": "assets/images/iron1_tn.jpg"
        }, {
            "title": "Ironman 2",
            "poster": "assets/images/iron2_tn.jpg"
        }, {
            "title": "Ironman 3",
            "poster": "assets/images/iron3_tn.jpg"
        }
    ]

}, {
    "sl": 4,
    "title": "Phantom",
    "gender": "male",
    "firstname": "Kit",
    "lastname": "Walker",
    "city": "Bhangala",
    "ticketprice": 98.6456,
    "releasedate": "1/27/2018",
    "poster": "assets/images/phantom.jpg",
    "movieslist": [
        {
            "title": "The Phantom Slam Evilz",
            "poster": "assets/images/phantom1_tn.jpg"
        }
    ]

}, {
    "sl": 5,
    "title": "Spiderman",
    "gender": "male",
    "firstname": "Peter",
    "lastname": "Parker",
    "city": "New York",
    "ticketprice": 1.3456,
    "releasedate": "9/26/2018",
    "poster": "assets/images/spiderman.jpg",
    "movieslist": [
        {
            "title": "Spiderman",
            "poster": "assets/images/spider1_tn.jpg"
        }, {
            "title": "Spiderman 2",
            "poster": "assets/images/spider2_tn.jpg"
        }, {
            "title": "Spiderman 3",
            "poster": "assets/images/spider3_tn.jpg"
        }
    ]
},
{
    "sl": 6,
    "title": "Wonder Women",
    "gender": "female",
    "firstname": "Princess",
    "lastname": "Diana",
    "city": "Amazon",
    "ticketprice": 341.3456978978,
    "releasedate": "11/26/2018",
    "poster": "assets/images/wonderwoman.jpg",
    "movieslist" : []
  }]
}
