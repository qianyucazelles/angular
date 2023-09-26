import { ParticipantInfo } from './../participant/participant';
import { User } from './../users/user';
import { Injectable } from '@angular/core';
import { UserInfo,  UserLoginInfo } from '../users/user';
import { Observable, catchError, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { errExc } from '../error';

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



  logIn(userLogin: UserLoginInfo): Observable<any> {
    const url = `${this.url}/auth/login`;

    return this.http.post<any>(url,userLogin, this.httpOptions)
    // .pipe(
    //   tap((userInfo: UserInfo)=>this.log(`successfully login user`)),
    //   catchError(this.handleError<errExc>('add user error'))
    // )
  }



  /** POST: add a new userinfo to the server */
  register(userLogin: UserLoginInfo): Observable<any> {
    
     const user: User = {
      userName : userLogin.userName,
      password: userLogin.password,
      role: "USER"
    };

    const url = `${this.url}/auth/register`;

    return this.http.post<any>(url, user, this.httpOptions)
    // .pipe(
    //   tap((newUserInfo: UserInfo) => this.log(`User is successfully added.`)),
    //   catchError(this.handleError<UserInfo>('addUserInfo'))
    // );
  }

  SetUserToLoaclStorage(userdata: UserInfo) {
    localStorage.setItem('userdata', JSON.stringify(userdata))
  }

  SetParticipantIdToLoaclStorage(participantInfo:ParticipantInfo) {
    localStorage.setItem('participantdata', JSON.stringify(participantInfo))
  }

  GetUserInfoFromStorage() {
    let _obj: UserInfo = {
      id: 0,
      userName: '',
      role: '',
      token: ''
    }
    if (localStorage.getItem('userdata') != null) {
      let jsonstring = localStorage.getItem('userdata') as string;
      _obj = JSON.parse(jsonstring);
      return _obj;
    } else {
      return _obj;
    }
  }

  GetParticipantInfofoFromStorage() {
    let _obj: ParticipantInfo = {
      id: 0,
      nom: '',
      prenom: ''
    }
    if (localStorage.getItem('participantdata') != null) {
      let jsonstring = localStorage.getItem('participantdata') as string;
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
