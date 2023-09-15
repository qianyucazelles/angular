import { Component } from '@angular/core';
import { User } from '../user';
import { Adresse } from '../adresse';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  
  typedeVoies = ["boulevard","rue","impass"];
  genders = ["female","male"]
  model = new User(
                  1,
                  "F",
                  "Romain",
                  this.genders[0],
                  new Adresse(
                        1,
                        2,
                        this.typedeVoies[0],
                        "Cadeneaux",
                        "13170",
                        "LPM"
                        ),
                  "romain@gmail.com",
                  "pss"
                  );

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser(){
    this.model = new User(
      1,
      "F",
      "Romain",
      "male",
      new Adresse(
            1,
            2,
            this.typedeVoies[0],
            "Cadeneaux",
            "13170",
            "LPM"
            ),
      "romain@gmail.com",
      "pss"
      )
  }


}
