import { Component } from '@angular/core';
import { MasaiUserService } from './masai.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Angular CRUD App</h1>
    <hr>
    <div *ngIf="show">
      <h2>Add New User</h2>
      <div class="mb-3">
        <label for="username" class="form-label">User Name</label>
        <input [(ngModel)]="newuser.username" class="form-control" id="username">
      </div>
      <div class="mb-3">
        <label for="usermail" class="form-label">User eMail</label>
        <input [(ngModel)]="newuser.usermail" class="form-control" id="usermail">
      </div>
      <div class="mb-3">
        <label for="usercity" class="form-label">User City</label>
        <input [(ngModel)]="newuser.usercity" class="form-control" id="usercity">
      </div>
      <div class="col-auto">
        <button (click)="addUserHandler()" class="btn btn-primary mb-3">Add New User</button>
      </div>
    </div>

    <div *ngIf="!show">
      <h2>Edit User</h2>
      <div class="mb-3">
        <label for="e_username" class="form-label">Edit User Name</label>
        <input [(ngModel)]="edituser.username" class="form-control" id="e_username">
      </div>
      <div class="mb-3">
        <label for="e_usermail" class="form-label">Edit User eMail</label>
        <input [(ngModel)]="edituser.usermail" class="form-control" id="e_usermail">
      </div>
      <div class="mb-3">
        <label for="e_usercity" class="form-label">Edit User City</label>
        <input [(ngModel)]="edituser.usercity" class="form-control" id="e_usercity">
      </div>
      <div class="col-auto">
        <button (click)="updateUserHandler()" class="btn btn-primary mb-3">Update User</button>
      </div>
    </div>
    <hr>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Sl #</th>
          <th>User Name</th>
          <th>User eMail</th>
          <th>User City</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of userslist; index as idx">
          <td>{{ idx + 1 }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.usermail }}</td>
          <td>{{ user.usercity }}</td>
          <td><button (click)="editSelectedUser(user._id)" class="btn btn-warning">Edit User Info</button></td>
          <td><button (click)="deleteSelectedUser(user._id)" class="btn btn-danger">Delete User</button></td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'step3-crud';
  show = true;
  newuser:any = {
    username : "",
    usermail : "",
    usercity : ""
  }
  edituser:any = {
    _id : "",
    username : "",
    usermail : "",
    usercity : ""
  }
  userslist:any = [];
  constructor(private us:MasaiUserService){
      //empty
  }

  refresh(){
    this.us.getAllUsers().subscribe( res => this.userslist = res );
  };

  ngOnInit(){
    this.refresh();
  }

  addUserHandler(){
    this.us.addUser(this.newuser).subscribe( res => {
      this.refresh();
      this.newuser = {
        username : "",
        usermail : "",
        usercity : ""
      }
    })
  }

  editSelectedUser(uid:any){
    this.us.getUserToUpdate(uid).subscribe( res => {
      this.edituser = res;
      this.show = false;
    } );
  }

  deleteSelectedUser(uid:any){
    this.us.deleteUser(uid).subscribe(res => {
      this.refresh();
    })
  }

  updateUserHandler(){
    this.us.updateUser(this.edituser).subscribe( res => {
      this.refresh();
      this.edituser = {
                        _id : "",
                        username : "",
                        usermail : "",
                        usercity : ""
                      };
      this.show = true;
    })
  }
}
