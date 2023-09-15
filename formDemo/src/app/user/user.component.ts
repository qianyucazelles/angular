import { User } from '../user';
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users! : User[];

  constructor(private userService: UserService){
    this.userService.getAllUsers().then((
      users : User[]
    )=>{
      this.users = users;
    }

    )
  }

}
