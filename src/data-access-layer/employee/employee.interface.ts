import { Observable, of  } from 'rxjs';
import {EmployeeListDataModel} from './data-model'
export abstract class EmployeeDataInterface {
  abstract advancedEmployeeSearch(formData: FormData): Observable<EmployeeListDataModel[]>;
  abstract getEmployee(id: number): Observable<any> ;
  abstract createEmployee(employee: Object): Observable<Object>;
  abstract updateEmployee(id: number, value: any): Observable<Object>;
  abstract deleteEmployee(id: number): Observable<any> 
  abstract getEmployeesList(): Observable<any[]> 
}
