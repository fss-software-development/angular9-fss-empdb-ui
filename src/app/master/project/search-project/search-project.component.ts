import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import {MasterService} from '../../../master.service';
import {ConfirmationModalComponent} from '../../../../app-commons/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-search-project',
  templateUrl: './search-project.component.html',
  styleUrls: ['./search-project.component.css']
})
export class SearchProjectComponent implements OnInit {

 
  dtOptions: DataTables.Settings = {};
  projects: any;
  public temp: Object=false;
  public regionList: any[];
  public projectStartDateList: any[];
  public projectEndDateList : any[];
  public accountNameList: any[];
  public projectName = new FormControl();
  public region = new FormControl();
  public projectStartDate=new FormControl();
  public projectEndDate = new FormControl();
  public accountName = new FormControl();
  constructor(private masterService: MasterService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
            ) { }

  ngOnInit(): void {
    this.reloadData();
    this.getRegionList();

    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5
      };
  }
  reloadData(): void {
    this.masterService.getProjectList().subscribe((res)=>{
      console.log("reloadData getProjectList", res);
      this.projects= res;
      this.temp = true;
    });
  }
  getRegionList(): void {
    this.masterService.getRegion().subscribe((data) => {
      this.regionList = data;
    })
  }

  getAccountName(): void {
    this.masterService.getProjectList().subscribe((data) => {
      this.accountNameList = data;
    })
  }

  getProjectStartDate(): void {
    this.masterService.getProjectList().subscribe((data) => {
      this.projectStartDateList = data;
    })
  }

  getprojectEndDateList(): void {
    this.masterService.getProjectList().subscribe((data) => {
      this.projectEndDateList = data;
    })
  }

  goToAddProject(): void {
    this.router.navigate(['add-project']);
  }

  viewProjectDetails(id: number): void {
    console.log("viewProjectDetails");
    this.router.navigate(['view-project']);
  }

  deleteProject(id: number, name: string): void {
    const msg = `Are you sure want to delete ${name} ?`;
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: {
        header: "Delete Confirmation",
        message: msg,
        noButtonRequired: true,
        yesButtonRequired: true,
        cancelButtonText : "Cancel",
        confirmButtonText: "Confirm"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.router.navigate(['master']);
      }
    });
  }

}
