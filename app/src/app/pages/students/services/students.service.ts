import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from '../interfaces/student.interface';
import { BASE_URL } from '../../../core/constants/base-url';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  endpoint = 'students';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${BASE_URL}/${this.endpoint}`);
  }
}
