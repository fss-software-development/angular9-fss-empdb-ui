import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewProjectComponent } from '../view-project/view-project.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MasterService} from '../../../master.service';
import { FormControl } from '@angular/forms';
import {ConfirmationModalComponent} from '../../../../app-commons/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  public regionList: any[];
  public region = new FormControl();
  public projectName: FormControl = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private masterService: MasterService,

    //private authenticationService: AuthenticationService
    ){   }

  ngOnInit(): void {
    this.getRegionList();
  }

  clear(): void {
    this.projectName.reset();
    this.region.reset();
  }


  openDialog(): void {
    const msg = `${this.projectName.value} added successfully as a new Project`;
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: {
        header: "Project Added Successfully",
        message: msg,
        noButtonRequired: false,
        yesButtonRequired: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.clear();
      }
    });
  }

 getRegionList(): void {
  this.masterService.getRegion().subscribe((data) => {
    this.regionList = data;
  })
}
 

}
