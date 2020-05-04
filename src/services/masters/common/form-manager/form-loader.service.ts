import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FormModalConverterService} from "../../../../framework/utils";
import {
  AcademicsFormModel,
  BillableStatusFormModel,
  DepartmentFormModel,
  DesignationFormModel,
  GradeFormModel,
  LocationFormModel,
  ProjectFormModel,
  ProjectTaggingFormModel,
  RegionFormModel,
  ServiceLineFormModel,
  PrimarySkillFormModel,
  ToolsFormModel
} from './form-model'
@Injectable()
export class CommonFormLoaderService {
  academicsList = new BehaviorSubject(<AcademicsFormModel[]>[]);
  billableStatusList = new BehaviorSubject(<BillableStatusFormModel[]>[]);
  departmentList = new BehaviorSubject(<DepartmentFormModel[]>[]);
  designationList = new BehaviorSubject(<DesignationFormModel[]>[]);
  gradeList = new BehaviorSubject(<GradeFormModel[]>[]);
  locationList = new BehaviorSubject(<LocationFormModel[]>[]);
  projectList = new BehaviorSubject(<ProjectFormModel[]>[]);
  projectTaggingList = new BehaviorSubject(<ProjectTaggingFormModel[]>[]);
  regionList = new BehaviorSubject(<RegionFormModel[]>[]);
  serviceLineList = new BehaviorSubject(<ServiceLineFormModel[]>[]);
  skillsList = new BehaviorSubject(<PrimarySkillFormModel[]>[]);
  toolsList = new BehaviorSubject(<ToolsFormModel[]>[]);
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
      case 'academicsList' : {
        const academicsList: AcademicsFormModel[] = this.formModalConverter.convertToArray(<any>apiData, AcademicsFormModel);
        this.academicsList.next(academicsList);
        break;
      }
      case 'billableStatusList': {
        const billableStatusList: BillableStatusFormModel[] = this.formModalConverter.convertToArray(<any>apiData, BillableStatusFormModel);
        this.billableStatusList.next(billableStatusList);
        break;
      }
      case 'departmentList': {
        const departmentList: DepartmentFormModel[] = this.formModalConverter.convertToArray(<any>apiData, DepartmentFormModel);
        this.departmentList.next(departmentList);
        break;
      }
      case 'designationList': {
        const designationList: DesignationFormModel[] = this.formModalConverter.convertToArray(<any>apiData, DesignationFormModel);
        this.designationList.next(designationList);
        break;
      }
      case 'gradeList': {
        const gradeList: GradeFormModel[] = this.formModalConverter.convertToArray(<any>apiData, GradeFormModel);
        this.gradeList.next(gradeList);
        break;
      }
      case 'locationList': {
        const locationList: LocationFormModel[] = this.formModalConverter.convertToArray(<any>apiData, LocationFormModel);
        this.locationList.next(locationList);
        break;
      }
      case 'projectList': {
        const projectList: ProjectFormModel[] = this.formModalConverter.convertToArray(<any>apiData, ProjectFormModel);
        this.projectList.next(projectList);
        break;
      }
      case 'projectTaggingList': {
        const projectTaggingList: ProjectTaggingFormModel[] = this.formModalConverter.convertToArray(<any>apiData, ProjectTaggingFormModel);
        this.projectTaggingList.next(projectTaggingList);
        break;
      }
      case 'regionList': {
        const regionList: RegionFormModel[] = this.formModalConverter.convertToArray(<any>apiData, RegionFormModel);
        this.regionList.next(regionList);
        break;
      }
      case 'serviceLineList': {
        const serviceLineList: ServiceLineFormModel[] = this.formModalConverter.convertToArray(<any>apiData, ServiceLineFormModel);
        this.serviceLineList.next(serviceLineList);
        break;
      }
      case 'skillsList': {
        const skillsList: PrimarySkillFormModel[] = this.formModalConverter.convertToArray(<any>apiData, PrimarySkillFormModel);
        this.skillsList.next(skillsList);
        break;
      }
      case 'toolsList': {
        const toolsList: ToolsFormModel[] = this.formModalConverter.convertToArray(<any>apiData, ToolsFormModel);
        this.toolsList.next(toolsList);
        break;
      }
    }
  }

  destroyFormState() {
    this.academicsList.next([]);
    this.billableStatusList.next([]);
    this.departmentList.next([]);
    this.designationList.next([]);
    this.gradeList.next([]);
    this.locationList.next([]);
    this.projectList.next([]);
    this.projectTaggingList.next([]);
    this.regionList.next([]);
    this.serviceLineList.next([]);
  }
}
