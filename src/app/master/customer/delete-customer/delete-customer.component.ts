import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MasterService}  from '../../../master.service';
@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  public regionList: any[];
  public customerName: FormControl = new FormControl();
  public region: FormControl = new FormControl();
  constructor(
              private masterService: MasterService,
              public dialog: MatDialog
          ) { }

  ngOnInit(): void {
  }
 
}
