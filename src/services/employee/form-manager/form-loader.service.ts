import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FormModalConverterService} from "../../../framework/utils";
import {
  EmployeeSearchFormModel,
  EmployeeListFormModel,
  EmployeeEditFormModel
} from "./form-model";
@Injectable()
export class EmployeeFormStateService {
  
  employeeList = new BehaviorSubject(<EmployeeListFormModel[]>[]);
  editEmployee = new BehaviorSubject(new EmployeeEditFormModel());
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
        const employeeList: EmployeeListFormModel[] = this.formModalConverter.convertToArray(<any>apiData, EmployeeListFormModel);
        this.employeeList.next(employeeList);
        break;
      }
      case 'employeeEdit': {
        const employeeEditData = new EmployeeEditFormModel();
        this.formModalConverter.setProperty(apiData, employeeEditData);
        this.editEmployee.next(employeeEditData);
        break;
      }
    }
  }


  destroyFormState() {
    this.employeeList.next([]);
    this.editEmployee.next(new EmployeeEditFormModel ());
  }
}
