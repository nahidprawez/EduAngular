import { Injectable } from '@angular/core';
import { newEmp } from './newemployee/employee2';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "";

  constructor(private http: HttpClient) { }

  getEmployees():Observable<newEmp[]> {
    return this.http.get<newEmp[]>(this.apiUrl);
  }
}
