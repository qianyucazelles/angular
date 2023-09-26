import { UserService } from './../services/user.service';
import { Participant, ParticipantInfo } from './../participant/participant';
import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../services/participant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { upperLowerTxt } from '../generalFunctions/upperLowerTxt';
import { ParticipantGeneralizeFormat } from '../participant/participantGeneralizeFormat';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.css']
})
export class ParticipantFormComponent implements OnInit{
  typedeVoies = ["boulevard","rue","impass"];
  participant!: Participant;
  submitted: boolean=false;
  stringMsg!: String;
  numberMsg!: String;
  longTxtMsg!: String;
  errorMsg!: string;
  participantInfo?: ParticipantInfo;

  constructor(
    private participantService: ParticipantService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router){
      this.stringMsg = "Veuillez entrer de 2 à 10 caractères.";
      this.longTxtMsg = "Veuillez entrer de 2 à 20 caractères.";
      this.numberMsg = "Veuillez entrer correct chiffre"
      this.errorMsg = "Veuillez remplir tous les infos"
  }

  ngOnInit(): void {
    this.getParticipant();
  }

  getParticipant(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id){
      this.participantService.getParticipant(id)
      .subscribe(participant => this.participant = participant);
    } else {
      this.newUser();

    }
    
  }

  onSubmit() { this.submitted = true; }

  

  submitParticipant(participant:Participant){
    participant = ParticipantGeneralizeFormat(participant);
    if(this.participant.id>0){
      this.update(participant);
    } else {
      this.add(participant);
    }

    const role = this.userService.GetUserInfoFromStorage().role;
    if (role=="USER"){
      const id = this.userService.GetParticipantInfofoFromStorage().id;
      this.router.navigate(['/participants/'+id])
    } else if (role == "ADMIN"){
      this.router.navigate(['/participants'])
    }
    
  }

  add(participant:Participant){
    
    this.participantService.addParticipant(participant)
    .subscribe(participant=>{
      this.participantInfo ={
        "id": participant.id,
        "nom": participant.nom,
        "prenom" : participant.prenom
      }
      this.userService.SetParticipantIdToLoaclStorage(this.participantInfo)
    })
  }


  update(participant:Participant){
    this.participantService.updateParticipant(participant)
    .subscribe()
  }

  newUser(){
    this.participant = {
      id: 0,
      nom: "",
      prenom: "",
      adresse:  {
        idAdresse :0,
        numeroVoie: "",
        typeVoie: this.typedeVoies[0],
        nomVoie: "",
        codePostal:"",
        ville: ""
      },
      mail: "",
      entreprise: ""   
};
}


}