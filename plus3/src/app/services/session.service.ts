import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  url = "http://localhost:8080/sessions"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) {}

  getAllSessions(): Observable<any[]> {
    return this.http.get<any[]>(this.url);  
  }

  subscribeSession(idSession:number, idParticipant: number):Observable<any>{
    return this.http.post<any>(this.url+"/addParticipant/"+idSession,idParticipant, this.httpOptions)

  }
}

