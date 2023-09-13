import { sessionList } from './sessionList';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formation-session',
  templateUrl: './formation-session.component.html',
  styleUrls: ['./formation-session.component.css']
})
export class FormationSessionComponent {
  sessionList = sessionList;
}
