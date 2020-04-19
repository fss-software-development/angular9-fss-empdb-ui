import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewProjectComponent } from '../view-project/view-project.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MasterService} from '../../../master.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  public regionList: any[];
  public region = new FormControl();


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


  
  toViewProject(): void{
const dialogRef= this.dialog.open( ViewProjectComponent,{
  width: '60%',
  data: {}
})
 }

 getRegionList(): void {
  this.masterService.getRegion().subscribe((data) => {
    this.regionList = data;
  })
}
 

}
