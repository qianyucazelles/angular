import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../formateurs/formateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  url = "http://localhost:8080/formateurs"

  constructor(private http: HttpClient) {}

  async getAllFormateurs(): Promise<Formateur[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
}