import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {CommonDataInterface} from './common-data.interface';
import {FormModalConverterService} from '../../../framework'
import {
  AcademicsDataModel,
  BillableStatusDataModel,
  DepartmentDataModel,
  DesignationDataModel,
  GradeDataModel,
  LocationDataModel,
  ProjectDataModel,
  ProjectTaggingDataModel,
  RegionDataModel,
  ServiceLineDataModel,
  PrimarySkillDataModel,
  ToolsDataModel
} from './data-model';
@Injectable()
export class CommonDataService implements CommonDataInterface {
  private baseUrl = 'http://localhost:8080/empdb/services/v1/masters';
  constructor(
    private http: HttpClient,
    private fmConverter: FormModalConverterService
  ) { }
     getAcademicsList(): Observable<AcademicsDataModel[]> {
      const url = `${this.baseUrl}/academics`;
      return this.http.get<AcademicsDataModel[]>(url);
     }
     getBillableStatusList(): Observable<BillableStatusDataModel[]> {
      const url = `${this.baseUrl}/billable-status`;
      return this.http.get<BillableStatusDataModel[]>(url);
     }
     getDepartmentList(): Observable<DepartmentDataModel[]>{
      const url = `${this.baseUrl}/departments`;
      return this.http.get<DepartmentDataModel[]>(url);
     }
     getDesignationList(): Observable<DesignationDataModel[]>{
      const url = `${this.baseUrl}/designations`;
      return this.http.get<DesignationDataModel[]>(url);
     }
     getGradeList(): Observable<GradeDataModel[]>{
      const url = `${this.baseUrl}/grades`;
      return this.http.get<GradeDataModel[]>(url);
     }
     getLocationList(): Observable<LocationDataModel[]>{
      const url = `${this.baseUrl}/locations`;
      return this.http.get<LocationDataModel[]>(url);
     }
     getProjectTaggingList(): Observable<ProjectTaggingDataModel[]>{
      const url = `${this.baseUrl}/project-tagging`;
      return this.http.get<ProjectTaggingDataModel[]>(url);
     }
     getRegionList(): Observable<RegionDataModel[]>{
      const url = `${this.baseUrl}/regions`;
      return this.http.get<RegionDataModel[]>(url);
     }
     getServiceLineList(): Observable<ServiceLineDataModel[]>{
      const url = `${this.baseUrl}/service-line`;
      return this.http.get<ServiceLineDataModel[]>(url);
     }
     getSkillsList(): Observable<PrimarySkillDataModel[]>{
      const url = `${this.baseUrl}/skills`;
      return this.http.get<PrimarySkillDataModel[]>(url);
     }
     getToolsList(): Observable<ToolsDataModel[]>{
      const url = `${this.baseUrl}/tools`;
      return this.http.get<ToolsDataModel[]>(url);
     }
}
