import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {
  FormHelperService,
  AutowireViewModel,
  MultiKeyTranslatePipeMeta
} from '../../framework';
import {
  EmployeeAddFormModel,
  CommonFormLoaderService,
  CustomerFormStateService,
  ProjectFormStateService,
  CommonCommandHandlerService,
  CustomerCommandHandlerService,
  ProjectCommandHandlerService,
  EmployeeCommandHandlerService
} from '../../services'
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  public title: String;
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
  public activityList: any[];
  public definiteRoleList: any[];
  public possibleRoleList: any[];
  public skillsList: any[];
  public toolsList: any[];
  public projectTaggList: any[];
  @AutowireViewModel('EmployeeAdd') employeeAddForm: FormGroup;
  
  constructor(
        private commandHandlerService: EmployeeCommandHandlerService,
        private router: Router,
        private route: ActivatedRoute,
        private formHelperService: FormHelperService,
        private commonFormLoaderService: CommonFormLoaderService,
        private customerFormStateService: CustomerFormStateService,
        private projectFormStateService: ProjectFormStateService,
        private commonCommandHandlerService: CommonCommandHandlerService,
        private customerCommandHandlerService: CustomerCommandHandlerService,
        private projectCommandHandlerService: ProjectCommandHandlerService
    ) { }

  ngOnInit() {
    this.employeeAddForm.reset(new EmployeeAddFormModel());
    this.initSubscriber();
    this.getMasters();
  }
  initSubscriber(): void {
    this.route.data.subscribe((data) => {
      this.title = data.title;
    });
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
    this.commonFormLoaderService.projectTaggingList.subscribe((data) => {
      this.projectTaggList = data;
    })
    this.commonFormLoaderService.skillsList.subscribe((data) => {
      this.skillsList = data;
    })
    this.commonFormLoaderService.toolsList.subscribe((data) => {
      this.toolsList = data;
    })
    this.formHelperService.hideLoadingSpinner.next(true);
  }
  getMasters(): void {
    this.commonCommandHandlerService.getAcademicsList();
    this.commonCommandHandlerService.getBillableStatusList();
    this.commonCommandHandlerService.getDepartmentList();
    this.commonCommandHandlerService.getDesignationList();
    this.commonCommandHandlerService.getLocationList();
    this.commonCommandHandlerService.getProjectTaggingList();
    this.commonCommandHandlerService.getRegionList();
    this.commonCommandHandlerService.getServiceLineList();
    this.commonCommandHandlerService.getGradeList();
    this.commonCommandHandlerService.getSkillsList();
    this.commonCommandHandlerService.getToolsList();
    this.customerCommandHandlerService.getCustomersList();
    this.projectCommandHandlerService.getProjectList();
  }
  addEmployee() {
    this.formHelperService.hideLoadingSpinner.next(false);
    this.commandHandlerService.createEmployee(this.employeeAddForm.value);
  }

  clear() {
  }

  back() {
    this.router.navigate(['/employees']);
  }
}