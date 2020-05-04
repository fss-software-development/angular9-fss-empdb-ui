import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import {Location} from '@angular/common';
import {
  CustomerDataInterface
} from '../../../data-access-layer/masters/customer';
import {CustomerFormStateService} from './form-manager';
import {ConfirmationModalComponent} from '../../../app-commons';
import {FormHelperService} from '../../../framework';
@Injectable()
export class  CustomerCommandHandlerService {

  constructor(
    private customerDataService: CustomerDataInterface,
    private customerFormStateService: CustomerFormStateService,
    private dialog: MatDialog,
    private _location: Location,
    private formHelperService: FormHelperService
    ) { }

  getCustomersListOnSearch(formData: FormData): void {
    this.customerDataService.getCustomersListOnSearch(formData).subscribe((searchData) => {
          this.customerFormStateService.updateFormState(searchData, 'customerList');
          this.formHelperService.hideLoadingSpinner.next(true);
          console.log("CustomerCommandHandlerService getCustomersListOnSearch success");
    }, (error)=> {
      console.error("CustomerCommandHandlerService getCustomersListOnSearch error", error);
    })
  }
  getCustomersList(): void {
    this.customerDataService.getCustomersList().subscribe((custListData) => {
      this.customerFormStateService.updateFormState(custListData, 'customerList');
      this.formHelperService.hideLoadingSpinner.next(true);
      console.log("CustomerCommandHandlerService getCustomersList success");
    }, (error)=> {
      console.error("CustomerCommandHandlerService getCustomersList error", error);
    })
  }
  addCustomer(formData: FormData): void {
    this.customerDataService.addCustomer(formData).subscribe(() => {
      this.formHelperService.hideLoadingSpinner.next(true);
      console.log("CustomerCommandHandlerService addCustomer success");
      const modalData = {
        header: "Add Confirmation",
        message: `Customer added successfully`,
        noButtonRequired: false,
        yesButtonRequired: true
      }
      this.openDialog(modalData);
    }, (error)=> {
      console.error("CustomerCommandHandlerService addCustomer error", error);
    })
  }
  getCustomerById(id: string): void {
    this.customerDataService.getCustomerById(id).subscribe((custData) => {
      this.customerFormStateService.updateFormState(custData, 'customerEdit');
      this.formHelperService.hideLoadingSpinner.next(true);
      console.log("CustomerCommandHandlerService getCustomerById success");
    }, (error)=> {
      console.error("CustomerCommandHandlerService getCustomerById error", error);
    })
  }
  updateCustomer(formData: FormData): void {
    this.customerDataService.updateCustomer(formData).subscribe((custUpdateData) => {
      this.customerFormStateService.updateFormState(custUpdateData, 'customerEdit');
      this.formHelperService.hideLoadingSpinner.next(true);
      console.log("CustomerCommandHandlerService updateCustomer success");
      const modalData = {
        header: "Update Confirmation",
        message: `Customer updated successfully`,
        noButtonRequired: false,
        yesButtonRequired: true
      }
      this.openDialog(modalData);
    }, (error)=> {
      console.error("CustomerCommandHandlerService updateCustomer error", error);
    })
  }

  deleteCustomer(id: string): void {
    this.customerDataService.deleteCustomer(id).subscribe((data) => {
      if(data){
        this.formHelperService.hideLoadingSpinner.next(true);
        this.getCustomersList();
        console.log("CustomerCommandHandlerService deleteCustomer success");
      }
    }, (error)=> {
      console.error("CustomerCommandHandlerService deleteCustomer error", error);
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
