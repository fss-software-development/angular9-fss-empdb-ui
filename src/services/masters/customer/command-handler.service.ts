import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import {
  CustomerDataInterface
} from '../../../data-access-layer/masters/customer';
import {CustomerFormStateService} from './form-manager';
import {ConfirmationModalComponent} from '../../../app-commons';
import {Location} from '@angular/common';
@Injectable()
export class CustomerCommandHandlerService {

  constructor(
    private customerDataService: CustomerDataInterface,
    private customerFormStateService: CustomerFormStateService,
    private dialog: MatDialog,
    private _location: Location
    ) { }

  getCustomersListOnSearch(formData: FormData): void {
    this.customerDataService.getCustomersListOnSearch(formData).subscribe((searchData) => {
          this.customerFormStateService.updateFormState(searchData, 'customerList');
          console.log("CustomerCommandHandlerService getCustomersListOnSearch success");
    }, (error)=> {
      console.error("CustomerCommandHandlerService getCustomersListOnSearch error", error);
    })
  }
  getCustomersList(): void {
    this.customerDataService.getCustomersList().subscribe((custListData) => {
      this.customerFormStateService.updateFormState(custListData, 'customerList');
      console.log("CustomerCommandHandlerService getCustomersList success");
    }, (error)=> {
      console.error("CustomerCommandHandlerService getCustomersList error", error);
    })
  }
  addCustomer(formData: FormData): void {
    this.customerDataService.addCustomer(formData).subscribe(() => {
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
      console.log("CustomerCommandHandlerService getCustomerById success");
    }, (error)=> {
      console.error("CustomerCommandHandlerService getCustomerById error", error);
    })
  }
  updateCustomer(formData: FormData): void {
    this.customerDataService.updateCustomer(formData).subscribe((custUpdateData) => {
      this.customerFormStateService.updateFormState(custUpdateData, 'customerEdit');
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

  deleteCustomer(id: string): Observable<boolean> {
    var isDeleted: boolean = false;
    this.customerDataService.deleteCustomer(id).subscribe((data) => {
      console.log("CustomerCommandHandlerService updateCustomer success");
      isDeleted = true;
    }, (error)=> {
      console.error("CustomerCommandHandlerService updateCustomer error", error);
      isDeleted = false;
    })
    return of(isDeleted);
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
