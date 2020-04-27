import { Observable } from 'rxjs';
import {
  CustomerListDataModel,
  CustomerAddDataModel,
  CustomerEditDataModel
} from './data-model'
export abstract class CustomerDataInterface {
  abstract getCustomersListOnSearch(formData: FormData): Observable<CustomerListDataModel[]>;
  abstract getCustomersList(): Observable<CustomerListDataModel[]>;
  abstract addCustomer(formData: FormData): Observable<CustomerAddDataModel>;
  abstract updateCustomer(formData: FormData): Observable<CustomerEditDataModel>;
  abstract getCustomerById(id: string): Observable<CustomerEditDataModel>;
  abstract deleteCustomer(id: string): Observable<any>;
}
