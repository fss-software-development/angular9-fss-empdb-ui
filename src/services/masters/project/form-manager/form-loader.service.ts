import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FormModalConverterService} from "../../../../framework/utils";
import {ProjectListFormModel,ProjectEditFormModel} from './form-model';
@Injectable()
export class ProjectFormStateService {
  projectList = new BehaviorSubject(<ProjectListFormModel[]>[]);
  editProject = new BehaviorSubject(new ProjectEditFormModel());

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

      case 'projectEdit' : {
        const projectEditData = new ProjectEditFormModel();
        this.formModalConverter.setProperty(apiData, projectEditData);
        this.editProject.next(apiData);
        break;
      }
    }
  }

  destroyFormState() {
    this.projectList.next([]);
    this.editProject.next(new ProjectEditFormModel());

  }
}
