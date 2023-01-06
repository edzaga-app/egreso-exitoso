import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../core/constants/base-url';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'login';
  token!: string;

  constructor(private http: HttpClient) {}

  login(user: string, password: string): Observable<any> {
    return this.http.post(`${BASE_URL}/${this.endpoint}`, { user, password });

    // let response = null;
    // try {
    //   response = await this.http.post(`${BASE_URL}/${this.endpoint}`, {
    //     user,
    //     password,
    //   });
    // } catch (err) {}
    // return response;
  }

  isLogged(): boolean {
    return true;
  }
}
