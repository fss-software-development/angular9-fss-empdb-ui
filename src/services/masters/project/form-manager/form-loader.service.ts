import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FormModalConverterService} from "../../../../framework/utils";
import {ProjectListFormModel} from './form-model';
@Injectable()
export class ProjectFormStateService {
  projectList = new BehaviorSubject(<ProjectListFormModel[]>[]);
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
      case 'projectList' : {
        const projectList: ProjectListFormModel[] = this.formModalConverter.convertToArray(<any>apiData, ProjectListFormModel);
        this.projectList.next(projectList);
        break;
      }
    }
  }


  destroyFormState() {
    this.projectList.next([]);
  }
}
