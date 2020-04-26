import { Injectable } from '@angular/core';
import {
  ProjectDataInterface
} from '../../../data-access-layer/masters/project';
import {ProjectFormStateService} from './form-manager';

@Injectable()
export class ProjectCommandHandlerService {

  constructor(
    private projectDataService: ProjectDataInterface,
    private ProjectFormStateService: ProjectFormStateService
    ) { }
  getProjectListOnSearch(formData: FormData): void {
    this.projectDataService.getProjectListOnSearch(formData).subscribe((searchData) => {
          this.ProjectFormStateService.updateFormState(searchData, 'projectList');
          console.log("ProjectCommandHandlerService getProjectListOnSearch success");
    }, (error)=> {
      console.log("ProjectCommandHandlerService getProjectListOnSearch error", error);
    })
  }
  getProjectList(formData: FormData): void {
    this.projectDataService.getProjectList(formData).subscribe((projListData) => {
      console.log('projList ' + projListData);
      this.ProjectFormStateService.updateFormState(projListData, 'projectList');
      console.log("ProjectCommandHandlerService getProjectListOnSearch success");
    }, (error)=> {
      console.log("ProjectCommandHandlerService getProjectListOnSearch error", error);
    })
  }
}
