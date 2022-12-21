import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/core/constants/base-url';
import { InformationSystems } from '../interfaces/information-systems';


@Injectable({
  providedIn: 'root'
})
export class InformationSystemsService {
  endpoint = 'informationSystems.json';

  constructor(public httpClient: HttpClient) { }

  getInformationSystems(): Observable<InformationSystems[]> {
    return this.httpClient.get<InformationSystems[]>(`${BASE_URL}${this.endpoint}`);
  }
}
