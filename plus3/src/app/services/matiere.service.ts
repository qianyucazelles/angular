import { Observable, catchError, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MessageService } from './message.service';
import { Matiere } from '../matiere/matieres';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
 
  url = "http://localhost:8080/matieres";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient, private messageService: MessageService) {}

  public getAllMatieres(): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(this.url)
    .pipe(
      tap(_=>this.log('fetched matieres')),
      catchError(this.handleError<Matiere[]>('getMatieres',[]))
    )
  }



  public getById(id:number): Observable<Matiere>{
    const url = `${this.url}/${id}`;
    return this.http.get<Matiere>(url)
    .pipe(
      tap(_=>this.log(`fetched matiere id =${id}`)),
      catchError(this.handleError<Matiere>(`get matiere id =${id}`))
    );
  }

  public addMatiere(matiere:Matiere): Observable<Matiere> {
        return this.http.post<Matiere>(this.url, matiere, this.httpOptions).pipe(
      tap((newMatiere: Matiere) => this.log(`added participant w/ id=${newMatiere.id}`)),
      catchError(this.handleError<Matiere>('addMatiere'))
    );

  }

  public deleteMatiere(id:number): Observable<Matiere> {
    const url=`${this.url}/${id}`;
    return this.http.delete<Matiere>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted matiere id=${id}`)),
      catchError(this.handleError<Matiere>('deleteMatiere'))
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


