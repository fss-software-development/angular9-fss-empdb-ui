import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  EmployeeFormStateService,
  EmployeeCommandHandlerService,
  CommonFormLoaderService,
  CustomerFormStateService,
  ProjectFormStateService,
  CommonCommandHandlerService,
  CustomerCommandHandlerService,
  ProjectCommandHandlerService,
  EmployeeEditFormModel,
 } from '../../services';
 import {
  FormHelperService,
  AutowireViewModel
} from '../../framework';
import { Router, ActivatedRoute } from '@angular/router';
var _this;
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public isEditable: boolean = false;
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
  public reportingManagerList: any[];
  public activityList: any[];
  public definiteRoleList: any[];
  public possibleRoleList: any[];
  public skillsList: any[];
  public toolsList: any[];
  public projectTaggList: any[];
  private employeeEditData: EmployeeEditFormModel;
  @AutowireViewModel('EmployeeEdit') employeeEditForm: FormGroup;
  constructor(
              private route: ActivatedRoute,private router: Router,
              private commandHandlerService: EmployeeCommandHandlerService,
              private formHelperService: FormHelperService,
              private commonFormLoaderService: CommonFormLoaderService,
              private customerFormStateService: CustomerFormStateService,
              private projectFormStateService: ProjectFormStateService,
              private commonCommandHandlerService: CommonCommandHandlerService,
              private customerCommandHandlerService: CustomerCommandHandlerService,
              private projectCommandHandlerService: ProjectCommandHandlerService,
              private employeeFormStateService: EmployeeFormStateService,
              ) { 
                _this = this;
              }

  ngOnInit() {
    this.initData();
    this.initSubscriber();
    this.getMasters();
  }
  initData():void {
    this.formHelperService.hideLoadingSpinner.next(true);
    const currentEmployeeId = this.route.snapshot.paramMap.get('id');
    this.commandHandlerService.getEmployee(currentEmployeeId);
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
    this.employeeFormStateService.editEmployee.subscribe((data) => {
      if(data) {
          this.employeeEditData = data;
          this.employeeEditForm.reset(new EmployeeEditFormModel(data));
          this.enableDisableForm();
      }
      
    })
    this.formHelperService.hideLoadingSpinner.next(true);
    setTimeout(function() { 
      _this.setDefaultDropdownValues();
     }, 1000);
    
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
  updateEmployee(): void {
    this.formHelperService.hideLoadingSpinner.next(false);
    this.commandHandlerService.updateEmployee(this.employeeEditForm.value);
  }
  editEmployee(): void {
    this.isEditable = this.isEditable? false : true;
    this.enableDisableForm();
  }
  enableDisableForm(): void {
    if(this.isEditable){
      this.employeeEditForm.enable();
      this.title = "Edit Employee";
    } else {
      this.employeeEditForm.disable();
    }
  }
  clear(): void {
    this.employeeEditForm.reset();
  }
  back(): void {
    this.router.navigate(['employees']);
  }

  setDefaultDropdownValues(): void {
    let employeeData = {
      designation: this.designationList[this.designationList.findIndex(x => x.designationId ===this.employeeEditData.designation.designationId)],
      department: this.departmentList[this.departmentList.findIndex(x => x.departmentId === this.employeeEditData.department.departmentId)],
      region: this.regionList[this.regionList.findIndex(x => x.regionId === this.employeeEditData.region.regionId)],
      account: this.accountList[this.accountList.findIndex(x => x.accountId === this.employeeEditData.account.accountId)],
      serviceLine: this.serviceList[this.serviceList.findIndex(x => x.serviceLineId === this.employeeEditData.serviceLine.serviceLineId)],
      location: this.locationList[this.locationList.findIndex(x => x.locationId === this.employeeEditData.location.locationId)],
      grade: this.gradeList[this.gradeList.findIndex(x => x.gradeId === this.employeeEditData.grade.gradeId)],
      academics: this.academicsList[this.academicsList.findIndex(x => x.academicsId === this.employeeEditData.academics.academicsId)],
      billableStatus: this.billableList[this.billableList.findIndex(x => x.billableStatusId === this.employeeEditData.billableStatus.billableStatusId)],
      projects: this.filterArray(this.employeeEditData.projects, this.projectList, 'projectId'),
      definiteRole: this.filterArray(this.employeeEditData.definiteRole, this.definiteRoleList, 'roleId'),
      possibleRole: this.filterArray(this.employeeEditData.possibleRole, this.possibleRoleList, 'roleId'),
      tools:  this.filterArray(this.employeeEditData.tools, this.toolsList, 'toolId'),
      skills: this.filterArray(this.employeeEditData.skills, this.skillsList, 'skillId'),
      projectTagging: this.projectTaggList[this.projectTaggList.findIndex(x => x.projectTaggingId === this.employeeEditData.projectTagging.projectTaggingId)],
    }
    this.employeeEditForm.patchValue(employeeData);
  }

  filterArray(arr: any, list: any, identifierName: string): any[] {
    const resArray: any = []
    for(let i=0; i<arr.length ; i++){
        const obj =  list[list.findIndex(x => x[identifierName] === arr[i][identifierName])]
        resArray.push(obj);
    }
    return resArray
  }
}