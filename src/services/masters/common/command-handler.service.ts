import { Injectable } from '@angular/core';
import {CommonFormLoaderService} from './form-manager'
import {CommonDataInterface} from '../../../data-access-layer';

@Injectable()
export class CommonCommandHandlerService {

  constructor(
    private commonFormLoaderService: CommonFormLoaderService,
    private commonDataService: CommonDataInterface
    ) { }

  getDesignationList(): void {
    this.commonDataService.getDesignationList().subscribe((desigDataList) => {
      this.commonFormLoaderService.updateFormState(desigDataList, 'designationList');
      console.log("CustomerCommandHandlerService getDesignationList success");
    }, (error) => {
      console.log("CustomerCommandHandlerService getDesignationList error", error);
    })
  }
  getDepartmentList(): void {
    this.commonDataService.getDepartmentList().subscribe((deptDataList) => {
      this.commonFormLoaderService.updateFormState(deptDataList, 'departmentList');
      console.log("CustomerCommandHandlerService getDepartmentList success");
    }, (error) => {
      console.log("CustomerCommandHandlerService getDepartmentList error", error);
    })
  }
  getRegionList(): void {
    this.commonDataService.getRegionList().subscribe((regDataList) => {
      this.commonFormLoaderService.updateFormState(regDataList, 'regionList');
      console.log("CustomerCommandHandlerService getRegionList success");
    }, (error) => {
      console.log("CustomerCommandHandlerService getRegionList error", error);
    })
  }
  getBillableStatusList(): void {
    this.commonDataService.getBillableStatusList().subscribe((billDataList) => {
      this.commonFormLoaderService.updateFormState(billDataList, 'billableStatusList');
      console.log("CustomerCommandHandlerService getBillableStatusList success");
    }, (error) => {
      console.log("CustomerCommandHandlerService getBillableStatusList error", error);
    })
  }
  getLocationList(): void {
    this.commonDataService.getLocationList().subscribe((locDataList) => {
      this.commonFormLoaderService.updateFormState(locDataList, 'locationList');
      console.log("CustomerCommandHandlerService getLocationList success");
    }, (error) => {
      console.log("CustomerCommandHandlerService getLocationList error", error);
    })
  }
  getAcademicsList(): void {
    this.commonDataService.getAcademicsList().subscribe((acadDataList) => {
      this.commonFormLoaderService.updateFormState(acadDataList, 'academicsList');
      console.log("CustomerCommandHandlerService getAcademicsList success");
    }, (error) => {
      console.log("CustomerCommandHandlerService getAcademicsList error", error);
    })
  }
  getProjectTaggingList(): void {
    this.commonDataService.getProjectTaggingList().subscribe((projectTagDataList) => {
      this.commonFormLoaderService.updateFormState(projectTagDataList, 'projectTaggingList');
      console.log("CustomerCommandHandlerService getProjectTaggingList success");
    }, (error) => {
      console.log("CustomerCommandHandlerService getProjectTaggingList error", error);
    })
  }
  getServiceLineList(): void {
    this.commonDataService.getServiceLineList().subscribe((serviceDataList) => {
      this.commonFormLoaderService.updateFormState(serviceDataList, 'serviceLineList');
      console.log("CustomerCommandHandlerService getServiceLineList success");
    }, (error) => {
      console.log("CustomerCommandHandlerService getServiceLineList error", error);
    })
  }
  getGradeList(): void {
    this.commonDataService.getGradeList().subscribe((gradeDataList) => {
      this.commonFormLoaderService.updateFormState(gradeDataList, 'gradeList');
      console.log("CustomerCommandHandlerService getGradeList success");
    }, (error) => {
      console.log("CustomerCommandHandlerService getGradeList error", error);
    })
  }

  getSkillsList(): void {
    this.commonDataService.getSkillsList().subscribe((skillsDataList) => {
      this.commonFormLoaderService.updateFormState(skillsDataList, 'skillsList');
      console.log("CustomerCommandHandlerService getSkillsList success");
    }, (error) => {
      console.log("CustomerCommandHandlerService getSkillsList error", error);
    })
  }
  getToolsList(): void {
    this.commonDataService.getToolsList().subscribe((toolsDataList) => {
      this.commonFormLoaderService.updateFormState(toolsDataList, 'toolsList');
      console.log("CustomerCommandHandlerService getToolsList success");
    }, (error) => {
      console.log("CustomerCommandHandlerService getToolsList error", error);
    })
  }
}
