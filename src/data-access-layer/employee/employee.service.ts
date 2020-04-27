import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from  } from 'rxjs';
import * as EMP_LIST_DATA from '../../assets/mock-api-resources/empList.json';
import {EmployeeDataInterface} from './employee.interface';
import {
  EmployeeListDataModel,
  EmployeeSearchDataModel
} from './data-model'
import {FormModalConverterService} from '../../framework'
@Injectable()
export class EmployeeDataService implements EmployeeDataInterface {

  private baseUrl = 'http://localhost:8080/empdb/services/v1';

  constructor(
    private http: HttpClient,
    private fmConverter: FormModalConverterService
    ) { }

  advancedEmployeeSearch(formData: FormData): Observable<EmployeeListDataModel[]> {
    const empSearchData = new EmployeeSearchDataModel();
    this.fmConverter.setProperty(formData, empSearchData);
    const url = `${this.baseUrl}/employees/search`;
    return this.http.post<EmployeeListDataModel[]>(url, empSearchData);
    // return of(<any>EMP_LIST_DATA);
  }
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

  getEmployeesList(): Observable<EmployeeListDataModel[]> {
    const url = `${this.baseUrl}/employees`;
    return this.http.get<EmployeeListDataModel[]>(url);
    // return of(<any>EMP_LIST_DATA);
  }
}
