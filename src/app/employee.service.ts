import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import * as EMP_LIST_DATA from '../assets/mock-api-resources/empList.json';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //private baseUrl = 'http://localhost:8081/empdb/services/empdb/v1/employees';

private baseUrl = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    //return this.http.get(`${this.baseUrl}/${id}`);
    return of(EMP_LIST_DATA);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any[]> {
    // return this.http.get<any>(`${this.baseUrl}`);
    return of(EMP_LIST_DATA);
  }
}
