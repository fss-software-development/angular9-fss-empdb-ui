import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import {MasterService}  from '../../../master.service';
import {ConfirmationModalComponent} from '../../../../app-commons/confirmation-modal/confirmation-modal.component';
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {
  public regionList: any[];
  public customerName: FormControl = new FormControl();
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
    const currentCustomerId = this.route.snapshot.paramMap.get('id');
    this.route.data.subscribe((data) => {
      this.title = data.title;
    });
    this.masterService.getCustomerById(currentCustomerId).subscribe((data) => {
    console.log("loadData", data);
      if(data){
        this.customerName.setValue(data[0].customerName);
        this.region.setValue(data[0].region.regionId);
        this.enableDisableForm();
      }
    })
  }

  getRegion(): void {
    this.masterService.getRegion().subscribe((data) => {
      this.regionList = data;
    })
  }

  updateCustomer(): void {
    this.openDialog();
  }
  editCustomer(): void {
    this.isEditable = this.isEditable? false : true;
    this.enableDisableForm();
  }

  enableDisableForm(): void {
    if(this.isEditable){
      this.customerName.enable();
      this.region.enable();
      this.title = "Edit Customer";
    } else {
      this.customerName.disable();
      this.region.disable();
    }
  }

  clear(): void {
    this.customerName.reset();
    this.region.reset();
  }

  back(): void {
    this.router.navigate(['master']);
  }

  openDialog(): void {
    const msg = `Customer updated successfully`;
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
        this.router.navigate(['master']);
      }
    });
  }
}
