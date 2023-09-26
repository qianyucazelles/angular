import { User } from './../users/user';
import { Injectable } from '@angular/core';
import { UserInfo,  UserLoginInfo } from '../users/user';
import { Observable, catchError, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  url = "http://localhost:8080"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) {}

  /**GET userinfos from the server */
  getUserInfos(): Observable< UserInfo[]> {
    return this.http.get<UserInfo[]>(this.url+"/users")
    .pipe(
      tap(_=>this.log('fetched userinfos')),
      catchError(this.handleError<UserInfo[]>('getUserInfos',[]))
    )
  }

  logIn(userLogin: UserLoginInfo): Observable< UserInfo> {
    const url = `${this.url}/auth/login`;
    return this.http.get<UserInfo>(url)
    .pipe(
      tap(_=>this.log('fetched userinfos')),
      catchError(this.handleError<UserInfo>(`login error`))
    );
  }



  /** POST: add a new userinfo to the server */
  register(userLogin: UserLoginInfo): Observable<UserInfo> {
    
     const user: User = {
      userName : userLogin.userName,
      password: userLogin.password,
      role: "USER"
    };

    const url = `${this.url}/auth/register`;

    return this.http.post<UserInfo>(url, user, this.httpOptions).pipe(
      tap((newUserInfo: UserInfo) => this.log(`User is successfully added.`)),
      catchError(this.handleError<UserInfo>('addUserInfo'))
    );
  }

  SetUserToLoaclStorage(userdata: UserInfo) {
    localStorage.setItem('userdata', JSON.stringify(userdata))
  }

  GetUserInfoFromStorage() {
    let _obj: UserInfo = {
      userName: '',
      role: '',
      id: 0
    }
    if (localStorage.getItem('userdata') != null) {
      let jsonstring = localStorage.getItem('userdata') as string;
      _obj = JSON.parse(jsonstring);
      return _obj;
    } else {
      return _obj;
    }
  }

  /** Log a UserInfoService message with the MessageService */
  // Notice that you keep injecting the MessageService but since your application calls it so frequently, wrap it in a private log() method:
  private log(message: string) {
    this.messageService.add(`UserInfoService: ${message}`);
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
