import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../shared/models/user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post('https://api.b3kndev.com/auth', credentials);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>('/users', user);
  }

  getUser(user: User): Observable<User> {
    return this.http.get<User>(`/users/${user.id}`);
  }

  editUser(user: User): Observable<string> {
    return this.http.put(`/user/${user.id}`, user, { responseType: 'text' });
  }

  deleteUser(user: User): Observable<string> {
    return this.http.delete(`/user/${user.id}`, { responseType: 'text' });
  }

}