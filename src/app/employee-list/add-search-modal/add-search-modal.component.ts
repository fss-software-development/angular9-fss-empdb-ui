import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import {MasterService}  from '../../master.service';
import {AutowireViewModel} from '../../../framework';
import {
  EmployeeSearchFormModel,
 EmployeeCommandHandlerService
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
    private masterService: MasterService,
    public dialogRef: MatDialogRef<AddSearchModalComponent>,
    private commandHandlerService: EmployeeCommandHandlerService
    ) { }

  ngOnInit(): void {
    this.buidForm();
    this.getMasters();
  }
  buidForm(): void {
    this.employeeSearchForm.reset(new EmployeeSearchFormModel());
  }
  
  getMasters(): void {
    this.masterService.getDesignation().subscribe((data) => {
      this.designationList = data
    })
    this.masterService.getDepartment().subscribe((data) => {
      this.departmentList = data;
    })
    this.masterService.getRegion().subscribe((data) => {
      this.regionList = data;
    })
    this.masterService.getAccount().subscribe((data) => {
      this.accountList = data;
    })
    this.masterService.getServiceLine().subscribe((data) => {
      this.serviceList = data;
    })
    this.masterService.getBillableStatus().subscribe((data) => {
      this.billableList = data;
    })
    this.masterService.getProject().subscribe((data) => {
      this.projectList = data;
    })
    this.masterService.getLocation().subscribe((data) => {
      this.locationList = data;
    })
    this.masterService.getGrade().subscribe((data) => {
      this.gradeList = data;
    })
    this.masterService.getAcademics().subscribe((data) => {
      this.academicsList = data;
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSearch(): void {
    this.commandHandlerService.advancedEmployeeSearch(this.employeeSearchForm.value);
    this.dialogRef.close();
  }
  
}
