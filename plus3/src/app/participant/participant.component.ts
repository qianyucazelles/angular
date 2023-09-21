import { Component } from '@angular/core';
import { Participant } from './participant';
import { ParticipantService } from '../services/participant.service';


@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent {
  participants: Participant[] =[];
  filteredParticipants: Participant[] =[];
  searchText: string ="";

  constructor(private participantService: ParticipantService){}

  ngOnInit(): void {
      this.getParticipants();
      this.filteredParticipants = this.participants;
  }
  
  getParticipants():void{
    this.participantService.getParticipants()
    .subscribe(participants => this.participants = participants)
  }

  delete(participantId: number){
    this.participantService.deleteParticipant(participantId)
    .subscribe(this.getParticipants);
    
  }

  filterParticipants(text: string){
    if(!text){
      this.filteredParticipants = this.participants;
    }

    this.filteredParticipants = this.participants.filter(
      participant => participant?.prenom.toLowerCase().includes(text.toLowerCase())
    )
  }

  

  }

   


