import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../participant/participant';
import { MessageService } from './message.service';
import { Observable, catchError, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  [x: string]: any;
  url = "http://localhost:8080/participants"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) {}

  /**GET participants from the server */
  getParticipants(): Observable< Participant[]> {
    return this.http.get<Participant[]>(this.url)
    .pipe(
      tap(_=>this.log('fetched participants')),
      catchError(this.handleError<Participant[]>('getParticipants',[]))
    )
  }

  /**GET participant by id from the server */
  getParticipant(id:number): Observable< Participant> {
    const url = `${this.url}/${id}`;
    return this.http.get<Participant>(url)
    .pipe(
      tap(_=>this.log(`fetched participant id =${id}`)),
      catchError(this.handleError<Participant>(`get participant id =${id}`))
    );
  }

  /** PUT: update the participant on the server */
  updateParticipant(participant: Participant): Observable<any> {
    return this.http.put(this.url, participant, this.httpOptions).pipe(
      tap(_ => this.log(`updated participant id=${participant.id}`)),
      catchError(this.handleError<any>('updateParticipant'))
    );
  }

  /** POST: add a new participant to the server */
  addParticipant(participant: Participant): Observable<Participant> {
    return this.http.post<Participant>(this.url, participant, this.httpOptions).pipe(
      tap((newParticipant: Participant) => this.log(`added participant w/ id=${newParticipant.id}`)),
      catchError(this.handleError<Participant>('addParticipant'))
    );
  }

  /** DELETE: delete the participant from the server */
deleteParticipant(id: number): Observable<Participant> {
  const url = `${this.url}/${id}`;

  return this.http.delete<Participant>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted participant id=${id}`)),
    catchError(this.handleError<Participant>('deleteParticipant'))
  );
}

  /** Log a ParticipantService message with the MessageService */
  // Notice that you keep injecting the MessageService but since your application calls it so frequently, wrap it in a private log() method:
  private log(message: string) {
    this.messageService.add(`ParticipantService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  
}
