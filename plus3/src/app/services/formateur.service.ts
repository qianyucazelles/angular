import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../formateurs/formateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http: HttpClient) {}

  getFormateurs(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>('/assets/jsons/formateurs.json');
  }
}