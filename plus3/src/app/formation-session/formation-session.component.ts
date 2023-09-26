
import { UserService } from './../services/user.service';
import { SessionService } from './../services/session.service';
import { Component, OnInit } from '@angular/core';
import { FormationSession } from './formation-session.module';
import { Router } from '@angular/router';
import { window } from 'rxjs';

@Component({
  selector: 'app-formation-session',
  templateUrl: './formation-session.component.html',
  styleUrls: ['./formation-session.component.css']
})
export class FormationSessionComponent implements OnInit {
  idParticipant! : number;
  idUser!: number;
  sessions?: FormationSession[];


  constructor(
    private sessionService:SessionService,
    private userService:UserService,
    private router:Router
    ){}

  ngOnInit(): void {
    this.sessionService.getAllSessions().subscribe(sessions=>this.sessions=sessions);
    this.idUser = this.userService.GetUserInfoFromStorage().id;
    this.idParticipant = this.userService.GetParticipantInfofoFromStorage().id;
  }

  refreshPage(){
    // window.location.reload()
  }

  subscribe(formationSession: FormationSession){

    if (this.idUser===0){
      alert("Veuillez login.")
      this.router.navigate(["auth"]);
    } else if (!this.idParticipant){
      alert("Veuillez enregistrer vos informations détaillées.")
      this.router.navigate(["participants/register"])
    } else if (formationSession.capacity==formationSession.remainingPlace){
      alert("Cette session est complète.Veuillez en choisir une autre.")
    } else {
      this.sessionService.subscribeSession(formationSession.id, this.idParticipant)
      .subscribe({
        next: response =>
          { if (response>0){
            alert("Vous êtes inscrit(e) avec succès.");
            } else {"Veuillez reessayer."}
          },
        error: err=>{alert("Error d'inscription.")}
      }
      
        )
        
    } 
    this.refreshPage();
  }

  

}
