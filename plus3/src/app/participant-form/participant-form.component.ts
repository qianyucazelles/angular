import { Participant } from './../participant/participant';
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

  constructor(
    private participantService: ParticipantService,
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
    this.router.navigate(['/participants'])
  }

  add(participant:Participant){
    
    this.participantService.addParticipant(participant)
    .subscribe()
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