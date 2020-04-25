import { Injectable } from '@angular/core';
import {
  CustomerDataInterface
} from '../../../data-access-layer/masters/customer';
import {CustomerFormStateService} from './form-manager';

@Injectable()
export class CustomerCommandHandlerService {

  constructor(
    private customerDataService: CustomerDataInterface,
    private customerFormStateService: CustomerFormStateService
    ) { }

  getCustomersListOnSearch(formData: FormData): void {
    this.customerDataService.getCustomersListOnSearch(formData).subscribe((searchData) => {
          this.customerFormStateService.updateFormState('customerList', searchData);
          console.log("CustomerCommandHandlerService getCustomersListOnSearch success");
    }, (error)=> {
      console.log("CustomerCommandHandlerService getCustomersListOnSearch error", error);
    })
  }
  getCustomersList(): void {
    this.customerDataService.getCustomersList().subscribe((custListData) => {
      this.customerFormStateService.updateFormState('customerList', custListData);
      console.log("CustomerCommandHandlerService getCustomersListOnSearch success");
    }, (error)=> {
      console.log("CustomerCommandHandlerService getCustomersListOnSearch error", error);
    })
  }
}
