import { User } from './../model/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[]=[];
  constructor() { }
  createUser(user: User){
    this.users.push(user);
  }

  getAllUsers(){
    return this.users;
  }

}
