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
      this.participantService.getAllparticipants().then((participants: Participant[])=>{
        this.participants = participants;
        this.filteredParticipants = this.participants;
      });     
  }
 
  handleDelete(participant: any){
    let index = this.participants?.indexOf(participant);
    this.participants.splice(index,1)
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

   


