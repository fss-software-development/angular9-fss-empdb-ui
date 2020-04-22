import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FormModalConverterService} from "../../../framework/utils";
import {
  EmployeeSearchFormModel,
  EmployeeListFormModel
} from "./form-model";
@Injectable()
export class EmployeeFormStateService {
  
  employeeList = new BehaviorSubject(<EmployeeListFormModel[]>[]);
  constructor(
                  private formModalConverter: FormModalConverterService
              ) {  }
  /**
   * Loads the FORM-MODEL from API-DATA-MODEL.
   * @param {BaseApiModel} apiData
   * @param {string} formName
   */
  updateFormState(apiData, formName) {
    switch (formName) {
      case 'employeeList' : {
        console.log("updateFormState", apiData)
        const employeeList: EmployeeListFormModel[] = this.formModalConverter.convertToArray(<any>apiData, EmployeeListFormModel);
        this.employeeList.next(employeeList);
        break;
      }
    }
  }


  destroyFormState() {
    this.employeeList.next([]);
  }
}
