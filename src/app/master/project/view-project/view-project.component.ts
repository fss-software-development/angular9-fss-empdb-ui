import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import {MasterService}  from '../../../master.service';
import {ConfirmationModalComponent} from '../../../../app-commons/confirmation-modal/confirmation-modal.component';


@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  public regionList: any[];
  public projectName: FormControl = new FormControl();
  public accountName: FormControl = new FormControl();
  public region: FormControl = new FormControl();
  public isEditable: boolean = false;
  public title: String;
  constructor(
              private masterService: MasterService,
              public dialog: MatDialog,
              private route: ActivatedRoute,
             private router: Router
          ) { }

  ngOnInit(): void {
    this.getRegion();
    this.loadData();
  }
  
  loadData(): void {
    const currentProjectId = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe((data) => {
      this.title = data.title;
    });
    this.masterService.getProjectById(currentProjectId).subscribe((data) => {
    console.log("loadData", data);
      if(data){
        this.projectName.setValue(data[0].projectName);
        this.region.setValue(data[0].region.regionId);
        this.accountName.setValue(data[0].account.accountName);
        this.enableDisableForm();
      }
    })
  }

  getRegion(): void {
    this.masterService.getRegion().subscribe((data) => {
      this.regionList = data;
    })
  }

  updateProject() {
    this.openDialog();
  }
  editProject(): void {
    this.isEditable = this.isEditable? false : true;
    this.enableDisableForm();
  }

  enableDisableForm(): void {
    if(this.isEditable){
      this.projectName.enable();
      this.region.enable();
      this.accountName.enable();
      this.title = "Edit Project";
    } else {
      this.projectName.disable();
      this.region.disable();
    }
  }

  clear(): void {
    this.projectName.reset();
    this.region.reset();
  }

  back(): void {
    this.router.navigate(['master']);
  }

  openDialog(): void {
    const msg = `Project updated successfully`;
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: {
        header: "Update Confirmation",
        message: msg,
        noButtonRequired: false,
        yesButtonRequired: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.clear();
        this.router.navigate(['search-project']);
      }
    });
  }

  
  
}
