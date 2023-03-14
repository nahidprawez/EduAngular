import { Injectable } from '@angular/core';
import { newEmp } from './newemployee/employee2';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "https://dummy.restapiexample.com/api/v1/employees";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<newEmp[]> {
    return this.http.get<{ data: newEmp[] }>(this.apiUrl).pipe(
      map(response => response.data) // extract the data field from the response object
    );
  }
}
