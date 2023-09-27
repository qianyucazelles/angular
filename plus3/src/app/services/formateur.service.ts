import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../component/formateurs/formateur';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  urlApi = "http://localhost:8080/formateurs"
  httpOptions = {
    headers : new HttpHeaders({"Content-Type": "application/json"})
  }

  constructor(private http: HttpClient) {}

//GET tout les Formateurs 
  getAllFormateurs(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>(this.urlApi)
  }

//GET un Formateur par rapport à son id
  getFormateur(id: number): Observable<Formateur>{
    const url = `${this.urlApi}/${id}`
    return this.http.get<Formateur>(url)
  }

//PUT : update un formateur 
updateFormateur(formateur : Formateur): Observable<any>{
  return this.http.put(this.urlApi, formateur, this.httpOptions)
}

// POST : add un formateur
addFormateur(formateur: Formateur): Observable<Formateur>{
  return this.http.post<Formateur>(this.urlApi, formateur,this.httpOptions)
}

//DELETE : delete un formateur
deleteFormateur(id: number): Observable<any>{
  const url = `${this.urlApi}/${id}`

  return this.http.delete<any>(url, this.httpOptions)
}


}