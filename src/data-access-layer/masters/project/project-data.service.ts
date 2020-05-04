import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from  } from 'rxjs';
import {
  ProjectSearchDataModel,
  ProjectListDataModel,
  ProjectAddDataModel,
  ProjectEditDataModel
} from './data-model'
import {ProjectDataInterface} from './project-data.interface';
import {FormModalConverterService} from '../../../framework'
import * as MASTER from '../../../assets/mock-api-resources/master.json';
@Injectable()
export class ProjectDataService implements ProjectDataInterface {
  private baseUrl = 'http://localhost:8080/empdb/services/v1';
  constructor(
    private http: HttpClient,
    private fmConverter: FormModalConverterService
  ) { }

  getProjectListOnSearch(formData: FormData): Observable<ProjectListDataModel[]> {
    const projSearchData = new ProjectSearchDataModel();
    this.fmConverter.setProperty(formData,projSearchData);
    const url = `${this.baseUrl}/projects/search`;
    return this.http.post<ProjectListDataModel[]>(url, projSearchData);
    // return of(MASTER.projectList);
  }
  getProjectList(): Observable<ProjectListDataModel[]> {
    const url = `${this.baseUrl}/projects/`;
    return this.http.get<ProjectListDataModel[]>(url);
    // return of(MASTER.projectList);
  }
  getProjectById(id: any): Observable<ProjectEditDataModel> {
    const url = `${this.baseUrl}/projects/${id}`;
    return this.http.get<ProjectEditDataModel>(url);
    // const projList = MASTER.projectList
    // var selectedProject =  projList.filter(function(project) {
    //   return project.projectId == id;
    // });
    // return of(<any>selectedProject[0]);
  }
  addProject(formData: FormData): Observable<ProjectAddDataModel> {
    const projAddData = new ProjectAddDataModel();
    this.fmConverter.setProperty(formData, projAddData);
    const url = `${this.baseUrl}/projects`;
    return this.http.post<ProjectAddDataModel>(url, projAddData);
  }
  updateProject(formData: FormData): Observable<ProjectEditDataModel> {
    const projEditData = new ProjectEditDataModel();
    this.fmConverter.setProperty(formData, projEditData);
    const url = `${this.baseUrl}/projects`;
    return this.http.put<ProjectEditDataModel>(url, projEditData);
  }

  deleteProject(id: string): Observable<any> {
    const url = `${this.baseUrl}/projects/${id}`;
    return this.http.delete<any>(url);
  }
}
