import { Participant } from './../participant/participant';
import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../services/participant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.css']
})
export class ParticipantFormComponent implements OnInit{
  typedeVoies = ["boulevard","rue","impass"];
  participant!: Participant;

  constructor(private participantService: ParticipantService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.participant = this.route.snapshot.data['participant'];
  }

  

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser(){
      this.participant = {
        id: 1,
        nom: "F",
        prenom: "Romain",
        adresse:  {
          idAdresse :1,
          numeroVoie: '2',
          typeVoie: this.typedeVoies[0],
          nomVoie: "Cadeneaux",
          codePostal:"13170",
          ville: "LPM"
        },
        mail: "romain@gmail.com",
        entreprise: "pss"
        
  };
  }

  add(participant:Participant){
    this.participantService.addParticipant(participant)
    .subscribe()
  }

  


}