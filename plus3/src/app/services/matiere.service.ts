import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Matieres } from '../matiere/matieres';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {

  private urlApi = "http://localhost:8080/matieres"
  

  constructor(private http: HttpClient) { }

  getMatieres(): Observable<Matieres[]>{
    return this.http.get<Matieres[]>(`${this.urlApi}`)
  }

}
