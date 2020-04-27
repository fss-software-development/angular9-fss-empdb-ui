import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FormModalConverterService} from "../../../../framework/utils";
import {
  CustomerListFormModel,
  CustomerEditFormModel
} from './form-model';
@Injectable()
export class CustomerFormStateService {
  customerList = new BehaviorSubject(<CustomerListFormModel[]>[]);
  editCustomer = new BehaviorSubject(new CustomerEditFormModel());
  constructor(
    private formModalConverter: FormModalConverterService
  ) { }
  /**
   * Loads the FORM-MODEL from API-DATA-MODEL.
   * @param {BaseApiModel} apiData
   * @param {string} formName
   */
  updateFormState(apiData, formName) {
    switch (formName) {
      case 'customerList' : {
        const customerList: CustomerListFormModel[] = this.formModalConverter.convertToArray(<any>apiData, CustomerListFormModel);
        this.customerList.next(customerList);
        break;
      }
      case 'customerEdit' : {
        const customerEditData = new CustomerEditFormModel();
        this.formModalConverter.setProperty(apiData, customerEditData);
        this.editCustomer.next(customerEditData);
        break;
      }
    }
  }


  destroyFormState() {
    this.customerList.next([]);
    this.editCustomer.next(new CustomerEditFormModel());
  }
}
