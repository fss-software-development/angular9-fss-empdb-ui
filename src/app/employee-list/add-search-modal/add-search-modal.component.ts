import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MasterService}  from '../../master.service';
import { FormControl } from '@angular/forms';
// interface DialogData {
//   email: string;
// }
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

// Will be removed once the code for form group is written
public designation = new FormControl();
public department = new FormControl();
public region = new FormControl();
public account = new FormControl();
public serviceLine = new FormControl();
public billableStatus = new FormControl();
public project = new FormControl();
public location = new FormControl();
public grade = new FormControl();
public academics = new FormControl();

  constructor(private masterService: MasterService,
    public dialogRef: MatDialogRef<AddSearchModalComponent>
    ) { }

  ngOnInit(): void {
    this.getMasters();
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
    console.log('onSearch designation', this.designation.value);
    this.dialogRef.close();
  }
}
