import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import {MasterService} from '../../../master.service';
import {ConfirmationModalComponent} from '../../../../app-commons/confirmation-modal/confirmation-modal.component';
@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  customers: any;
  public temp: Object=false;
  public regionList: any[];
  public customerName = new FormControl();
  public region = new FormControl();
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
    this.masterService.getCustomersList().subscribe((res)=>{
      console.log("reloadData getCustomersList", res);
      this.customers= res;
      this.temp = true;
    });
  }
  getRegionList(): void {
    this.masterService.getRegion().subscribe((data) => {
      this.regionList = data;
    })
  }
  goToAddCustomer(): void {
    this.router.navigate(['master/addcustomer']);
  }

  viewCustomerDetails(id: number): void {
    console.log("viewCustomerDetails");
    this.router.navigate(['master/editcustomer', id]);
  }

  deleteCustomer(id: number, name: string): void {
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
