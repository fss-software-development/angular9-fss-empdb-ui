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

  private baseUrl = 'http://localhost:8081/empdb/services/v1';

  constructor(
    private http: HttpClient,
    private fmConverter: FormModalConverterService
    ) { }

  advancedEmployeeSearch(formData: FormData): Observable<EmployeeListDataModel[]> {
    const empSearchData = new EmployeeSearchDataModel();
    this.fmConverter.setProperty(formData, empSearchData);
    const url = `${this.baseUrl}/employees/search`;
    return this.http.post<EmployeeListDataModel[]>(url, empSearchData);
  }
  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/employees/${id}`);
   // return of(EMP_LIST_DATA);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/employees`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/employees/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/employees/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<EmployeeListDataModel[]> {
     return this.http.get<any>(`${this.baseUrl}/employees`);
    //return of(<any>EMP_LIST_DATA);
  }
}
