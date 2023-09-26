import { User, UserInfo, UserLoginInfo } from './../users/user';
import { UserService } from './../services/user.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { errExc } from '../error';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userInfo?: UserInfo;
  userLogin?: UserLoginInfo;
  errInfo?: errExc;
  userName: string = "";
  password: string = "";
  active: string = "login";
  confirmPassword: string = "";
  @Output() onSubmitLoginEvent = new EventEmitter();
  @Output() onSubmitRegisterEvent = new EventEmitter();

  constructor(private userService :UserService, private router: Router){}




	onLoginTab(): void {
		this.active = "login";
    localStorage.clear();
 
	}

	onRegisterTab(): void {
		this.active = "register";
	}

  onSubmitLogin(): void{
   this.userLogin= 
    {"userName": this.userName,
    "password": this.password}
    this.userService.logIn(
      this.userLogin
      ).subscribe({
        next:response =>{
          if(response && response.hasOwnProperty('userName')){
            this.userInfo=response,
            this.userService.SetUserToLoaclStorage(response)
            this.router.navigate([''])

          } else {alert(response)}
        },
        error: err =>{
          alert("Please check usename or password");}}
        )
        }

        onSubmitRegister(): void{
          if (this.confirmPassword==this.password){
              this.userLogin= 
              {"userName": this.userName,
              "password": this.password}
             
              this.userService.register(
                this.userLogin
                ).subscribe({
                  next:response =>{
                    if(response && response.hasOwnProperty('userName')){
                      this.userInfo=response,
                      this.userService.SetUserToLoaclStorage(response),
                      this.router.navigate([''])

                    } else {alert(response)}
                  },
                  error: err =>{
                    alert("User name is already used.");}}
                  )

          } else {
            alert("Please use same passwords.")
          }
        }




      }