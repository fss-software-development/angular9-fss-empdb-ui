import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import {MasterService}  from '../../../master.service';
import {ConfirmationModalComponent} from '../../../../app-commons/confirmation-modal/confirmation-modal.component';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  public regionList: any[];
  public customerName: FormControl = new FormControl();
  public region: FormControl = new FormControl();
  constructor(
          private masterService: MasterService,
          public dialog: MatDialog,
          private route: ActivatedRoute,
          private router: Router
          ) { }

  ngOnInit(): void {
    this.getRegion();
  }

  getRegion(): void {
    this.masterService.getRegion().subscribe((data) => {
      this.regionList = data;
    })
  }
  addCustomer(): void {
    this.openDialog();
  }
  clear(): void {
    this.customerName.reset();
    this.region.reset();
  }

  back(): void {
    this.router.navigate(['master']);
  }

  openDialog(): void {
    const msg = `${this.customerName.value} added successfully as a new customer`;
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '40%',
      data: {
        header: "Add Confirmation",
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
}
