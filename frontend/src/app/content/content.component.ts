import { AxiosService } from './../axios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor(private axiosService: AxiosService){}
  
  onLogin(input: any): void{
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: input.login,
        password: input.password

      }
    )
  }

  onRegister(input: any): void{
    this.axiosService.request(
      "POST",
      "/register",
      {
        email: input.email,
        roles: input.roles,
        userName: input.login,
        password: input.password

      }
    )
  }


}
