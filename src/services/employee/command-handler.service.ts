import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Location} from '@angular/common';
import {EmployeeDataInterface} from '../../data-access-layer';
import {EmployeeFormStateService} from './form-manager/form-loader.service';
import {FormHelperService} from '../../framework';
import {ConfirmationModalComponent} from '../../app-commons';
@Injectable()
export class EmployeeCommandHandlerService {

  constructor(
      private employeeDataService: EmployeeDataInterface,
      private formStateService:EmployeeFormStateService,
      private formHelperService: FormHelperService,
      private dialog: MatDialog,
      private _location: Location,
    ) { }
    
  advancedEmployeeSearch(formData: FormData): void {
    this.employeeDataService.advancedEmployeeSearch(formData).subscribe((searchData) => {
      this.formStateService.updateFormState(searchData,"employeeList");
      this.formHelperService.hideLoadingSpinner.next(true);
      console.log("EmployeeCommandHandlerService advancedEmployeeSearch success");
    }, (error)=> {
      console.log("EmployeeCommandHandlerService advancedEmployeeSearch error", error);
    })
  }
  getEmployeesList(): void {
    this.employeeDataService.getEmployeesList().subscribe((empListData) => {
      this.formStateService.updateFormState(empListData,"employeeList");
      this.formHelperService.hideLoadingSpinner.next(true);
      console.log("EmployeeCommandHandlerService getEmployeesList success");
    }, (error) => {
      console.log("EmployeeCommandHandlerService getEmployeesList error", error);
    })
  }
  getEmployee(id: string): void {
    this.employeeDataService.getEmployee(id).subscribe((empData) => {
      this.formStateService.updateFormState(empData, 'employeeEdit');
      this.formHelperService.hideLoadingSpinner.next(true);
      console.log("EmployeeCommandHandlerService getEmployee success");
    })
  }

  createEmployee(formData: FormData): void {
    this.employeeDataService.createEmployee(formData).subscribe(() => {
      this.formHelperService.hideLoadingSpinner.next(true);
      console.log("EmployeeCommandHandlerService createEmployee success");
      const modalData = {
        header: "Add Confirmation",
        message: `Employee added successfully`,
        noButtonRequired: false,
        yesButtonRequired: true
      }
      this.openDialog(modalData);
    }, (error) => {
      console.log("EmployeeCommandHandlerService createEmployee error", error);
    })
  }
  updateEmployee(formData: FormData): void{
    this.employeeDataService.updateEmployee(formData).subscribe(() => {
      this.formHelperService.hideLoadingSpinner.next(true);
      console.log("EmployeeCommandHandlerService updateEmployee success");
      const modalData = {
        header: "Edit Confirmation",
        message: `Employee updated successfully`,
        noButtonRequired: false,
        yesButtonRequired: true
      }
      this.openDialog(modalData);
    }, (error) => {
      console.log("EmployeeCommandHandlerService updateEmployee error", error);
    })
  }
  deleteEmployee(id: string): void {
    this.employeeDataService.deleteEmployee(id).subscribe((data) => {
        this.getEmployeesList();
        console.log("EmployeeCommandHandlerService deleteEmployee success");
    }, (error) => {
      console.log("EmployeeCommandHandlerService deleteEmployee error", error);
    })
  }
  openDialog(modalData): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: modalData
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this._location.back();
      }
    });
  }
}
