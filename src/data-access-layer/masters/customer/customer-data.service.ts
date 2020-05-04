import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  CustomerSearchDataModel,
  CustomerListDataModel,
  CustomerAddDataModel,
  CustomerEditDataModel
} from './data-model'
import {CustomerDataInterface} from './customer-data.interface';
import {FormModalConverterService} from '../../../framework'
import * as MASTER from '../../../assets/mock-api-resources/master.json';
@Injectable()
export class CustomerDataService implements CustomerDataInterface {
  private baseUrl = 'http://localhost:8080/empdb/services/v1';
  
  constructor(
    private http: HttpClient,
    private fmConverter: FormModalConverterService
  ) { }

  getCustomersListOnSearch(formData: FormData): Observable<CustomerListDataModel[]> {
    const custSearchData = new CustomerSearchDataModel();
    this.fmConverter.setProperty(formData,custSearchData);
    const url = `${this.baseUrl}/accounts/search`;
    return this.http.post<CustomerListDataModel[]>(url, custSearchData);
    // return of(MASTER.customerList);
  }
  getCustomersList(): Observable<CustomerListDataModel[]> {
    const url = `${this.baseUrl}/masters/accounts`;
    return this.http.get<CustomerListDataModel[]>(url);
    // return of(<any>MASTER.customerList);
  }
  getCustomerById(id:string): Observable<CustomerEditDataModel> {
    const url = `${this.baseUrl}/accounts/${id}`;
    return this.http.get<CustomerEditDataModel>(url);
    // const custList = MASTER.customerList
    // var selectedCustomer =  custList.filter(function(customer) {
    //   return <any>customer.accountId == id;
    // });
    // return of(<any>selectedCustomer[0]);
  }
  addCustomer(formData: FormData): Observable<CustomerAddDataModel> {
    const custAddData = new CustomerAddDataModel();
    this.fmConverter.setProperty(formData, custAddData);
    const url = `${this.baseUrl}/accounts`;
    return this.http.post<CustomerAddDataModel>(url, custAddData);
  }
  updateCustomer(formData: FormData): Observable<CustomerEditDataModel> {
    const custEditData = new CustomerEditDataModel();
    this.fmConverter.setProperty(formData, custEditData);
    const url = `${this.baseUrl}/accounts`;
    return this.http.put<CustomerEditDataModel>(url, custEditData);
  }

  deleteCustomer(id: string): Observable<any> {
    const url = `${this.baseUrl}/accounts/${id}`;
    return this.http.delete<any>(url);
  }
}
