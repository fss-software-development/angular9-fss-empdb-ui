import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from  } from 'rxjs';
import {
  ProjectSearchDataModel,
  ProjectListDataModel
} from './data-model'
import {ProjectDataInterface} from './project-data.interface';
import {FormModalConverterService} from '../../../framework'
import * as MASTER from '../../../assets/mock-api-resources/master.json';
@Injectable()
export class ProjectDataService implements ProjectDataInterface {
  private baseUrl = 'http://localhost:8081/empdb/services/v1';
  constructor(
    private http: HttpClient,
    private fmConverter: FormModalConverterService
  ) { }

  getProjectListOnSearch(formData: FormData): Observable<ProjectListDataModel[]> {
    console.log("getProjectListOnSearch formData", formData);
    const projSearchData = new ProjectSearchDataModel();
    this.fmConverter.setProperty(formData,projSearchData);
    const url = `${this.baseUrl}/projects/search`;
    return this.http.post<ProjectListDataModel[]>(url, projSearchData);
    // return of(MASTER.projectList);
  }
  getProjectList(formData: FormData): Observable<ProjectListDataModel[]> {
    console.log("getProjectList formData", formData);
    const projSearchData = new ProjectSearchDataModel();
    this.fmConverter.setProperty(formData,projSearchData);
    const url = `${this.baseUrl}/projects/search`;
    return this.http.get<ProjectListDataModel[]>(url);
    // return of(MASTER.projectList);
  }
  getProjectById(id): Observable<any> {
    const projList = MASTER.projectList
    var selectedProject =  projList.filter(function(project) {
      return project.projectId == id;
    });
    return of(<any>selectedProject);
  }
}
