import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../formations/formations';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  url = "http://localhost:8080/formations"
  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private http: HttpClient) {}

//GET liste de toutes les formations
  getFormations(): Observable<Formation[]>{
    return this.http.get<Formation[]>(this.url)
  }

//GET formation by id
  getFormation(id: number): Observable<Formation>{
    const url = `${this.url}/${id}`
    return this.http.get<Formation>(url)
  }

//PUT update la formation
  updateFormation(formation: Formation): Observable<any>{
    return this.http.put(this.url, formation, this.httpOptions)
  }


//POST ajout d'une formation
  addFormation(formation: Formation): Observable<Formation>{
    return this.http.post<Formation>(this.url, formation, this.httpOptions)
  }

//DELETE supprimer une formation
  deleteFormation(id: number): Observable<Formation>{
    const url = `${this.url}/${id}`
    return this.http.delete<Formation>(url, this.httpOptions)
  }
}
