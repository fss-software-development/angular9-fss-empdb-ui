import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
import { Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {
  ProjectDataInterface
} from '../../../data-access-layer';
import {ProjectFormStateService} from './form-manager';
import {ConfirmationModalComponent} from '../../../app-commons';
import {FormHelperService} from '../../../framework';


@Injectable()
export class ProjectCommandHandlerService {

  constructor(
    private projectDataService: ProjectDataInterface,
    private projectFormStateService: ProjectFormStateService,
    private dialog: MatDialog,
    private _location: Location,
    private formHelperService: FormHelperService
    ) { }
  getProjectListOnSearch(formData: FormData): void {
    this.projectDataService.getProjectListOnSearch(formData).subscribe((searchData) => {
          this.projectFormStateService.updateFormState(searchData, 'projectList');
          this.formHelperService.hideLoadingSpinner.next(true);
          console.log("ProjectCommandHandlerService getProjectListOnSearch success");
    }, (error)=> {
      console.log("ProjectCommandHandlerService getProjectListOnSearch error", error);
    })
  }
  getProjectList(): void {
    this.projectDataService.getProjectList().subscribe((projListData) => {
      this.projectFormStateService.updateFormState(projListData, 'projectList');
      this.formHelperService.hideLoadingSpinner.next(true);
      console.log("ProjectCommandHandlerService getProjectListOnSearch success");
    }, (error)=> {
      console.log("ProjectCommandHandlerService getProjectListOnSearch error", error);
    })
  }

  addProject(formData: FormData): void {
    this.projectDataService.addProject(formData).subscribe(() => {
      console.log("ProjectCommandHandlerService addProject success");
      this.formHelperService.hideLoadingSpinner.next(true);
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
      this.formHelperService.hideLoadingSpinner.next(true);
      console.log("ProjectCommandHandlerService getProjectById success");
    }, (error)=> {
      console.error("ProjectCommandHandlerService getProjectById error", error);
    })
  }

  updateProject(formData: FormData): void {
    this.projectDataService.updateProject(formData).subscribe((projUpdateData) => {
      this.projectFormStateService.updateFormState(projUpdateData, 'projectEdit');
      this.formHelperService.hideLoadingSpinner.next(true);
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

  deleteProject(id: string): void {
    this.projectDataService.deleteProject(id).subscribe((data) => {
        this.formHelperService.hideLoadingSpinner.next(true);
        this.getProjectList();
        console.log("ProjectCommandHandlerService deleteProject success");
    }, (error)=> {
      console.error("ProjectCommandHandlerService deleteProject error", error);
    })
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
