import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/core/constants/base-url';
import { ModuleForm } from '../interfaces/module-form';



@Injectable({
  providedIn: 'root'
})
export class ModulesService {
  endpoint = 'modules.json';

  constructor(public httpClient: HttpClient) { }

  getApiModules(): Observable<ModuleForm[]> {
    return this.httpClient.get<ModuleForm[]>(`${BASE_URL}${this.endpoint}`);
  }
}
