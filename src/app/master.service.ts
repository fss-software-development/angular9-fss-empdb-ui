import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';

@Injectable()
export class MasterService {

  private baseUrl = 'http://localhost:8081/empdb/services/v1/masters/';

  constructor(private http: HttpClient) { }

  getDesignation(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}` + 'designations');
  }
  getDepartment(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}` + 'departments');
  }
  getRegion(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}` + 'regions');
  }
  getAccount(): Observable<any[]>{
    return this.http.get<any>(`${this.baseUrl}` + 'accounts');
  }
  getServiceLine(): Observable<any[]>{
    return this.http.get<any>(`${this.baseUrl}` + 'serviceLines');
  }
  getBillableStatus(): Observable<any[]>{
    return this.http.get<any>(`${this.baseUrl}` + 'billableStatus');
  }
  getProject(): Observable<any[]>{
    return this.http.get<any>(`${this.baseUrl}` + 'projects');
  }
  getLocation(): Observable<any[]>{
    return this.http.get<any>(`${this.baseUrl}` + 'locations');
  }
  getGrade(): Observable<any[]>{
    return this.http.get<any>(`${this.baseUrl}` + 'grades');
  }
  getAcademics(): Observable<any[]>{
    return this.http.get<any>(`${this.baseUrl}` + 'academics');
  }
  getCustomersList(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}` + 'customers');
  }
  getCustomerById(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/customers/${id}`);
  }
}
