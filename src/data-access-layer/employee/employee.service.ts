import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from  } from 'rxjs';
import * as EMP_LIST_DATA from '../../assets/mock-api-resources/empList.json';
import {EmployeeDataInterface} from './employee.interface';
import {
  EmployeeListDataModel,
  EmployeeSearchDataModel,
  EmployeeAddDataModel,
  EmployeeEditDataModel
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
  getEmployee(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/employees/${id}`);
    // return of(EMP_LIST_DATA);
  }

  createEmployee(formData: FormData): Observable<EmployeeAddDataModel> {
    const createEmpData = new EmployeeAddDataModel();
    this.fmConverter.setProperty(formData, createEmpData);
    return this.http.post<EmployeeAddDataModel>(`${this.baseUrl}/employees`, createEmpData);
  }

  updateEmployee(formData: FormData): Observable<EmployeeEditDataModel> {
    const editEmpData = new EmployeeEditDataModel();
    this.fmConverter.setProperty(formData, editEmpData)
    return this.http.put<EmployeeAddDataModel>(`${this.baseUrl}/employees`, editEmpData);
  }

  deleteEmployee(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/employees/${id}`);
  }

  getEmployeesList(): Observable<EmployeeListDataModel[]> {
    const url = `${this.baseUrl}/employees/`;
    return this.http.get<EmployeeListDataModel[]>(url);
    // return of(<any>EMP_LIST_DATA);
  }
}
