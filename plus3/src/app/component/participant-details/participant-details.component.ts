import { UserService } from '../../services/user.service';
import { Participant } from '../participant/participant';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ParticipantService } from '../../services/participant.service';


@Component({
  selector: 'app-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})

export class ParticipantDetailsComponent {
participant!: Participant;
hasRight: Boolean = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private participantService: ParticipantService,
    private location: Location,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getParticipant();
    const id = this.userService.GetParticipantInfofoFromStorage().id;
    const role = this.userService.GetUserInfoFromStorage().role;
    if (role==="ADMIN"|| id == this.participant.id ){
      this.hasRight=true;
    } 
  }

  getParticipant(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.participantService.getParticipant(id)
      .subscribe(participant => this.participant = participant);
  }

  save(): void {
    if (this.participant) {
      this.participantService.updateParticipant(this.participant)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

  updateParticipant(){
    this.router.navigate(['/participants/register/'+this.participant.id], {state: {participant : this.participant}})
  }

}