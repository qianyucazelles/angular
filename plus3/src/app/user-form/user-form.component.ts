import { User, UserInfo } from './../users/user';
import { UserService } from './../services/user.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  constructor(private userService :UserService){}
  userName: string = "";
  password: string = "";
  active: string = "login";
  confirmPassword: string = "";



	onLoginTab(): void {
		this.active = "login";
    localStorage.clear();
 
	}

	onRegisterTab(): void {
		this.active = "register";
	}

  onSubmitLogin(): void{

    this.userService.logIn(
      {"userName": this.userName,
      "password": this.password}
      ).subscribe(userInfo=>this.userService.SetUserToLoaclStorage(userInfo))

    this.onSubmitLoginEvent.emit(
      {"userName": this.userName,
      "password": this.password
    }
    )
   }

   onSubmitRegister(): void{
    if (this.password==this.confirmPassword){
      this.onSubmitRegisterEvent.emit(
        { "userName": this.userName,
          "password":this.password,
        }
      )
    } else {
      alert("Please use same passwords.")
    }
    
   }

}