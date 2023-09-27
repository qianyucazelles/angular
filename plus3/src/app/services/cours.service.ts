import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';

import { MessageService } from './message.service';
import { Cours } from '../models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  url = "http://localhost:8080/cours";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) {}

  
  public getAllCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.url)
    .pipe(
      tap(_=>this.log('fetched cours')),
      catchError(this.handleError<Cours[]>('getCours',[]))
    )
  }

  public getById(id: number): Observable<Cours>{
    const url = `${this.url}/${id}`;
    return this.http.get<Cours>(url)
    .pipe(
      tap(_=>this.log(`fetched cours id =${id}`)),
      catchError(this.handleError<Cours>(`get cours id =${id}`))
    );
  }

  addCours(cours: Cours): Observable<Cours> {
    return this.http.post<Cours>(this.url, cours, this.httpOptions).pipe(
      tap((newCours: Cours) => this.log(`added cours w/ id=${newCours.id}`)),
      catchError(this.handleError<Cours>('addCours'))
    );
  }

  
  public updateCours() {}

  deleteCours(id: number): Observable<Cours> {
    const url = `${this.url}/${id}`;
  
    return this.http.delete<Cours>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted cours id=${id}`)),
      catchError(this.handleError<Cours>('deleteCours'))
    );
  }

  
  
  private log(message: string) {
    this.messageService.add(`MatiereService: ${message}`);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}