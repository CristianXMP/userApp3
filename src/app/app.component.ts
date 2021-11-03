import { UserService } from './core/services/user.service';
import { User } from './core/model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 showModal: boolean = false;
 users: User[]=[];
 states: ['A','D'];
 model: User = new User();

 constructor(private userService: UserService){}

 ngOnInit(): void {

this.getAllUsers();

 }

 newUser(){
this.model = new User();
  this.showModal = true;
 }

 getAllUsers(){
 this.users = this.userService.getAllUsers();
 }

 save(){
  if (!this.model.id) {
    this.userService.createUser(this.model);
  }else{
    //update
  }
 }

 deleteUser(){

 }
}
