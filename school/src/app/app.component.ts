import { participantList } from './participantList';
import { Component } from '@angular/core';
import { sessionList } from './sessionList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school';
  participantList = participantList;
  sessionList = sessionList;
}
