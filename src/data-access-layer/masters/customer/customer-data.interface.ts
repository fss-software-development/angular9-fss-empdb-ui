import { Observable } from 'rxjs';
import {CustomerListDataModel} from './data-model'
export abstract class CustomerDataInterface {
  abstract getCustomersListOnSearch(formData: FormData): Observable<CustomerListDataModel[]>;
  abstract getCustomersList(): Observable<CustomerListDataModel[]>;
}
