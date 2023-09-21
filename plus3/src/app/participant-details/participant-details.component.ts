import { Participant } from './../participant/participant';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ParticipantService } from '../services/participant.service';

@Component({
  selector: 'app-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})

export class ParticipantDetailsComponent {
participant!: Participant;
update: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private participantService: ParticipantService,
    private location: Location
  ) { this.update = false;}

  ngOnInit(): void {
    this.getParticipant();
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

  setUpdate(): void{
    this.update = true;
  }

  updateParticipant(){
    this.router.navigate(['/participants/register'], {state: {participant : this.participant}})
  }

}