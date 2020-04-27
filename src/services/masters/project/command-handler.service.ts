import { Injectable } from '@angular/core';
import {
  ProjectDataInterface
} from '../../../data-access-layer/masters/project';
import {ProjectFormStateService} from './form-manager';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {ConfirmationModalComponent} from '../../../app-commons';
import {Location} from '@angular/common';


@Injectable()
export class ProjectCommandHandlerService {

  constructor(
    private projectDataService: ProjectDataInterface,
    private projectFormStateService: ProjectFormStateService,
    private dialog: MatDialog,
    private _location: Location
    ) { }
  getProjectListOnSearch(formData: FormData): void {
    this.projectDataService.getProjectListOnSearch(formData).subscribe((searchData) => {
          this.projectFormStateService.updateFormState(searchData, 'projectList');
          console.log("ProjectCommandHandlerService getProjectListOnSearch success");
    }, (error)=> {
      console.log("ProjectCommandHandlerService getProjectListOnSearch error", error);
    })
  }
  getProjectList(): void {
    this.projectDataService.getProjectList().subscribe((projListData) => {
      this.projectFormStateService.updateFormState(projListData, 'projectList');
      console.log("ProjectCommandHandlerService getProjectListOnSearch success");
    }, (error)=> {
      console.log("ProjectCommandHandlerService getProjectListOnSearch error", error);
    })
  }

  addProject(formData: FormData): void {
    this.projectDataService.addProject(formData).subscribe(() => {
      console.log("ProjectCommandHandlerService addProject success");
      const modalData = {
        header: "Add Confirmation",
        message: `Project added successfully`,
        noButtonRequired: false,
        yesButtonRequired: true
      }
      this.openDialog(modalData);
    }, (error)=> {
      console.error("ProjectCommandHandlerService addProject error", error);
    })
  }
  getProjectById(id: string): void {
    this.projectDataService.getProjectById(id).subscribe((updateData) => {
      this.projectFormStateService.updateFormState(updateData, 'projectEdit');
      console.log("ProjectCommandHandlerService getProjectById success");
    }, (error)=> {
      console.error("ProjectCommandHandlerService getProjectById error", error);
    })
  }

  updateProject(formData: FormData): void {
    this.projectDataService.updateProject(formData).subscribe((projUpdateData) => {
      this.projectFormStateService.updateFormState(projUpdateData, 'projectEdit');
      console.log("ProjectCommandHandlerService updateProject success");
      const modalData = {
        header: "Update Confirmation",
        message: `Project updated successfully`,
        noButtonRequired: false,
        yesButtonRequired: true
      }
      this.openDialog(modalData);
    }, (error)=> {
      console.error("ProjectCommandHandlerService updateProject error", error);
    })
  }

  deleteProject(id: string): Observable<boolean> {
    var isDeleted: boolean = false;
    this.projectDataService.deleteProject(id).subscribe((data) => {
      console.log("ProjectCommandHandlerService updateProject success");
      isDeleted = true;
    }, (error)=> {
      console.error("ProjectCommandHandlerService updateProject error", error);
      isDeleted = false;
    })
    return of(isDeleted);
  }
  openDialog(modalData): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: modalData
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this._location.back();
      }
    });
  }
}
