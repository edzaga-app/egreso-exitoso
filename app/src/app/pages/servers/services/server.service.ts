import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Server } from '../interfaces/server.interface';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  endpoint = 'services';

  constructor(
    private http: HttpClient
  ) {}

  getServers(): Observable<Server[]> {
    return this.http.get<Server[]>(`assets/data/servers.json`);
  }

  getServersById() {

  }

  saveServer() {

  }

  updateServer() {

  }


}
