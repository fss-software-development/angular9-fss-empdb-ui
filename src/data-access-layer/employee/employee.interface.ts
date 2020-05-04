import { Observable, of  } from 'rxjs';
import {
  EmployeeListDataModel,
  EmployeeAddDataModel,
  EmployeeEditDataModel
} from './data-model'
export abstract class EmployeeDataInterface {
  abstract advancedEmployeeSearch(formData: FormData): Observable<EmployeeListDataModel[]>;
  abstract getEmployee(id: string): Observable<any> ;
  abstract createEmployee(formData: FormData): Observable<EmployeeAddDataModel>;
  abstract updateEmployee(formData: FormData): Observable<EmployeeEditDataModel>;
  abstract deleteEmployee(id: string): Observable<any> 
  abstract getEmployeesList(): Observable<EmployeeListDataModel[]> 
}
