import { UserInfo, UserLoginInfo } from './../users/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Formation } from '../formations/formations';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title = 'plus3';
  userRole: String = "";
  actions!: Array<any>;
  formations: Formation[] = []


  constructor(private userService: UserService,private router: Router, 
    private formationService : FormationService){}

  ngOnInit(): void {
    this.getAllFormation();
    const userRole = this.userService.GetUserInfoFromStorage().role;
    this.showComponent(userRole);
    
  }

  getAllFormation(): void{
    this.formationService.getFormations()
    .subscribe(formations =>{this.formations = formations, this.formations = formations})
  }
  

  showComponent(userRole: string): void{
    this.userRole = userRole;
    if (userRole=="ADMIN"){
      this.actions=[
        { name:"Participants", url: "/participants"},
        {name:"Sessions", url: "/sessions"},
        {name:"Formateurs", url: "/formateurs"},
        {name:"Notre Histoire", url: "/histoire"}
      ];
    } else if (userRole=="USER"){
      this.actions=[
        {name:"Sessions", url: "/sessions"},
        {name:"Notre Histoire", url: "/histoire"}
      ];
    } else{
      this.actions=[
        {name:"Notre Histoire", url: "/histoire"}
      ];
    }
  }

  


  currentAction: any;

  setCurrentAction(action:any){
    this.currentAction = action;
  }

  onLogin(input: any): void{
    const user: UserLoginInfo = {
      "userName": input.userName,
      "password": input.password
    }
    
    this.userService.logIn(user).subscribe(
      userInfo=>
      {this.userService.SetUserToLoaclStorage(userInfo),
      this.showComponent(userInfo.role)}
      )
  }

  onRegister(input: any): void{
    const user: UserLoginInfo = {
      "userName": input.userName,
      "password": input.password
    }
    
    this.userService.register(user).subscribe(
      userInfo=>
      {this.userService.SetUserToLoaclStorage(userInfo),
        this.showComponent(userInfo.role)}
      )
    
  }

  getAuth(){
    this.router.navigate(['auth'])
  }
}