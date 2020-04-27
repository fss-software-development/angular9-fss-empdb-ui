import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import * as MASTER from '../assets/mock-api-resources/master.json';
@Injectable({
      providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getDesignation(): Observable<any[]> {
    return of(MASTER.destination);
  }
  getDepartment(): Observable<any[]> {
    return of(MASTER.department);
  }
  getRegion(): Observable<any[]> {
    return of(MASTER.region);
  }
  getAccount(): Observable<any[]>{
    return of(MASTER.account);
  }
  getServiceLine(): Observable<any[]>{
    return of(MASTER.serviceLine);
  }
  getBillableStatus(): Observable<any[]>{
    return of(MASTER.billableStatus);
  }
  getProject(): Observable<any[]>{
    return of(MASTER.project);
  }
  getLocation(): Observable<any[]>{
    return of(MASTER.location);
  }
  getGrade(): Observable<any[]>{
    return of(MASTER.grade);
  }
  getAcademics(): Observable<any[]>{
    return of(MASTER.academics);
  }
  getProjectList(): Observable<any[]> {
    return of(MASTER.projectList);
  }
  getProjectById(id): Observable<any> {
    const custList = MASTER.projectList
    var selectedProject =  custList.filter(function(project) {
      return project.projectId == id;
    });
    return of(selectedProject);
  }
 
}
