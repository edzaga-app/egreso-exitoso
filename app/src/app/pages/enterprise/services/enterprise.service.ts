import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enterprise } from '../interfaces/enterprise-form';
import { map } from 'rxjs';
import { BASE_URL } from 'src/app/core/constants/base-url';



@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  endpoint = 'companies.json';
  endpointSimplified = 'companiesSimplified.json'
  constructor(public httpClient: HttpClient) { }

  getEnterprise(): Observable<Enterprise[]> {
    return this.httpClient.get<Enterprise[]>(`${BASE_URL}${this.endpoint}`);
  }

  getEnterpriseKeyValue(): Observable<Enterprise[]> {
    return this.httpClient.get<Enterprise[]>(`${BASE_URL}${this.endpointSimplified}`);
  }

}
