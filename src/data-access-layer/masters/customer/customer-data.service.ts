import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from  } from 'rxjs';
import {
  CustomerSearchDataModel,
  CustomerListDataModel
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
  getCustomersList(formData: FormData): Observable<CustomerListDataModel[]> {
    const custSearchData = new CustomerSearchDataModel();
    this.fmConverter.setProperty(formData,custSearchData);
    const url = `${this.baseUrl}/accounts/search`;
    return this.http.post<CustomerListDataModel[]>(url, custSearchData);
    // return of(MASTER.customerList);
  }
  getCustomerById(id): Observable<any> {
    const custList = MASTER.customerList
    var selectedCustomer =  custList.filter(function(customer) {
      return customer.customerId == id;
    });
    return of(selectedCustomer);
  }
}
