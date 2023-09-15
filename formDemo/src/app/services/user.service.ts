import { User } from './../user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/users';

  constructor() { }

  async getAllUsers(): Promise<User[]>{
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getUserById(id: number): Promise<User | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
