import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formateur } from './formateur';

@Injectable()
export class FormateurService {
  constructor(private http: HttpClient) {}

  getFormateurs(): Observable<Formateur[]> {
    return this.http.get<Formateur[]>('/assets/jsons/formateurs.json');
  }
}
