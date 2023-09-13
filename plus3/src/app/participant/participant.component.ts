import { Component } from '@angular/core';
import { participantList } from './participantList';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent {
  participantList = participantList;
}
