import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  
  typedeVoies = ["boulevard","rue","impass"];

  model = new User(
      1,
     'Peter',
     "abc@gmail.com",
      3,
      this.typedeVoies[0],
      "gambetta");

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser(){
    this.model = new User(
      1,
     'yourname',
     "abc@gmail.com",
      3,
      this.typedeVoies[0],
      "gambetta")
  }


}
