import { UserService } from './../services/user.service';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Participant } from './participant';
import { ParticipantService } from '../services/participant.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent {
  [x: string]: any;
  participants: Participant[] =[];
  filteredParticipants: Participant[] =[];
  searchText: string ="";
  role: string="";
  hasRight: Boolean = false;

  constructor(
    private participantService: ParticipantService,
    private location: Location,
    private router : Router,
    private userService: UserService
    ){}

  ngOnInit(): void {
      this.getParticipants();
      this.role = this.userService.GetUserInfoFromStorage().role;
      if (this.role=="ADMIN"){
        this.hasRight=true;
      }
  }
  
  getParticipants():void{
    this.participantService.getParticipants()
    .subscribe(participants => {this.participants = participants, this.filteredParticipants=participants})
  }

  delete(participantId: number){
    this.participantService.deleteParticipant(participantId)
    .subscribe(this.getParticipants);
    this.refreshPage();
  }

  refreshPage(){
    window.location.reload();
  }

  filterParticipants(text: string){
    if(!text){
      this.filteredParticipants = this.participants;
    }

    this.filteredParticipants = this.participants.filter(
      participant => 
      participant?.prenom.toLowerCase().includes(text.toLowerCase())||
      participant?.nom.toLowerCase().includes(text.toLowerCase())
    )
  }

  

  }

   


