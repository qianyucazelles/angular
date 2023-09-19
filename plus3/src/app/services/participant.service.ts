import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../participant/participant';


@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  url = "http://localhost:8080/participants"

  constructor(private http: HttpClient) {}

  async getAllparticipants(): Promise< Participant[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  
}
