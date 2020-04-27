import { Injectable } from '@angular/core';
import {EmployeeDataInterface} from '../../data-access-layer';
import {EmployeeFormStateService} from './form-manager/form-loader.service';
@Injectable()
export class EmployeeCommandHandlerService {

  constructor(
      private employeeDataService: EmployeeDataInterface,
      private formStateService:EmployeeFormStateService
    ) { }
    
  advancedEmployeeSearch(formData: FormData): void {
    this.employeeDataService.advancedEmployeeSearch(formData).subscribe((searchData) => {
      this.formStateService.updateFormState(searchData,"employeeList");
      console.log("EmployeeCommandHandlerService advancedEmployeeSearch success");
    }, (error)=> {
      console.log("EmployeeCommandHandlerService advancedEmployeeSearch error", error);
    })
  }
  getEmployeesList(): void {
    this.employeeDataService.getEmployeesList().subscribe((empListData) => {
      this.formStateService.updateFormState(empListData,"employeeList");
      console.log("EmployeeCommandHandlerService getEmployeesList success");
    }, (error) => {
      console.log("EmployeeCommandHandlerService getEmployeesList error", error);
    })
  }
  getEmployee(id: number): void {
    this.employeeDataService.getEmployee(id).subscribe(() => {
      console.log("EmployeeCommandHandlerService getEmployee success");
    })
  }

  createEmployee(employee: Object): void {
    this.employeeDataService.createEmployee(employee).subscribe(() => {
      console.log("EmployeeCommandHandlerService createEmployee success");
    })
  }
  updateEmployee(id: number, value: any): void{
    this.employeeDataService.updateEmployee(id, value).subscribe(() => {
      console.log("EmployeeCommandHandlerService updateEmployee success");
    })
  }
}
