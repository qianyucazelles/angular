import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  http = inject(HttpClient);

  login(username: string, password: string): Observable<HttpResponse<void>> {
    return this.http.post<void>(
      'http://localhost:8080/login',
      { username, password },
      {
        observe: 'response',
      }
    );
  }

  register(username: string, password: string): Observable<void> {
    return this.http.post<void>('http://localhost:8080/register', {
      username,
      password,
    });
  }

  fetchSecureEndpoint(): Observable<{ msg: string }> {
    return this.http.get<{ msg: string }>('http://localhost:8080/adresses');
  }

  fetchSecureAdminEndpoint(): Observable<{ msg: string }> {
    return this.http.get<{ msg: string }>('http://localhost:8080/participants');
  }

  fetchUnsecureEndpoint(): Observable<{ msg: string }> {
    return this.http.get<{ msg: string }>('http://localhost:8080/sessions');
  }
}