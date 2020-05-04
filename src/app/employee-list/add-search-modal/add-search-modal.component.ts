import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import {
  AutowireViewModel,
  FormHelperService
} from '../../../framework';
import {
  EmployeeSearchFormModel,
  EmployeeCommandHandlerService,
  CommonFormLoaderService,
  CustomerFormStateService,
  ProjectFormStateService,
  CommonCommandHandlerService,
  CustomerCommandHandlerService,
  ProjectCommandHandlerService
} from '../../../services';
@Component({
  selector: 'app-add-search-modal',
  templateUrl: './add-search-modal.component.html',
  styleUrls: ['./add-search-modal.component.css']
})
export class AddSearchModalComponent implements OnInit {

public designationList: any[];
public departmentList: any[];
public regionList: any[];
public accountList: any[];
public serviceList: any[];
public billableList: any[];
public projectList: any[];
public locationList: any[];
public gradeList: any[];
public academicsList: any[];

@AutowireViewModel('EmployeeSearch') employeeSearchForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddSearchModalComponent>,
    private commandHandlerService: EmployeeCommandHandlerService,
    private formHelperService: FormHelperService,
    private commonFormLoaderService: CommonFormLoaderService,
    private customerFormStateService: CustomerFormStateService,
    private projectFormStateService: ProjectFormStateService,
    private commonCommandHandlerService: CommonCommandHandlerService,
    private customerCommandHandlerService: CustomerCommandHandlerService,
    private projectCommandHandlerService: ProjectCommandHandlerService
    ) { }

  ngOnInit(): void {
    this.buidForm();
    this.initSubscriber();
    this.getMasters();
  }
  buidForm(): void {
    this.employeeSearchForm.reset(new EmployeeSearchFormModel());
  }
  initSubscriber(): void {
    this.commonFormLoaderService.designationList.subscribe((data) => {
      this.designationList = data
    })
    this.commonFormLoaderService.departmentList.subscribe((data) => {
      this.departmentList = data;
    })
    this.commonFormLoaderService.regionList.subscribe((data) => {
      this.regionList = data;
    })
    this.customerFormStateService.customerList.subscribe((data) => {
      this.accountList = data;
    })
    this.commonFormLoaderService.serviceLineList.subscribe((data) => {
      this.serviceList = data;
    })
    this.commonFormLoaderService.billableStatusList.subscribe((data) => {
      this.billableList = data;
    })
    this.projectFormStateService.projectList.subscribe((data) => {
      this.projectList = data;
    })
    this.commonFormLoaderService.locationList.subscribe((data) => {
      this.locationList = data;
    })
    this.commonFormLoaderService.gradeList.subscribe((data) => {
      this.gradeList = data;
    })
    this.commonFormLoaderService.academicsList.subscribe((data) => {
      this.academicsList = data;
    })
    // this.commonFormLoaderService.projectTaggingList.subscribe((data) => {
    //   this.projectTaggList = data;
    // })
    // this.commonFormLoaderService.skillsList.subscribe((data) => {
    //   this.skillsList = data;
    // })
    // this.commonFormLoaderService.toolsList.subscribe((data) => {
    //   this.toolsList = data;
    // })
  }
  getMasters(): void {
    this.commonCommandHandlerService.getAcademicsList();
    this.commonCommandHandlerService.getBillableStatusList();
    this.commonCommandHandlerService.getDepartmentList();
    this.commonCommandHandlerService.getDesignationList();
    this.commonCommandHandlerService.getLocationList();
    this.commonCommandHandlerService.getRegionList();
    this.commonCommandHandlerService.getServiceLineList();
    this.commonCommandHandlerService.getGradeList();
    this.customerCommandHandlerService.getCustomersList();
    this.projectCommandHandlerService.getProjectList();
   
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSearch(): void {
    this.formHelperService.hideLoadingSpinner.next(false);
    this.commandHandlerService.advancedEmployeeSearch(this.employeeSearchForm.value);
    this.dialogRef.close();
  }
  
}
