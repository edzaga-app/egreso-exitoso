import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASE_URL } from 'src/app/core/constants/base-url';
import { ExternalWorkers } from '../interfaces/external-workers';

@Injectable({
  providedIn: 'root'
})
export class ExternalWorkersService {
  endpoint = 'externalWorkers.json';
  constructor(public httpClient: HttpClient) { }

  getExternalWorkers(url: string): Observable<ExternalWorkers[]> {
    return this.httpClient.get<ExternalWorkers[]>(`${BASE_URL}${this.endpoint}`);
  }


}
