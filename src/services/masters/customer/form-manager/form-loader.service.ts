import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FormModalConverterService} from "../../../../framework/utils";
import {CustomerListFormModel} from './form-model';
@Injectable()
export class CustomerFormStateService {
  customerList = new BehaviorSubject(<CustomerListFormModel[]>[]);
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
    }
  }


  destroyFormState() {
    this.customerList.next([]);
  }
}
