import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {AddSearchModalComponent} from './add-search-modal/add-search-modal.component'
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  public email: string;
  constructor(
    private employeeService: EmployeeService,
     private router: Router,
     public dialog: MatDialog
     ) {}
  
  public employees: any;
  public temp: Object=false;
   
  dtOptions: DataTables.Settings = {};
  
  ngOnInit() {

	this.reloadData();
	this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
}

  reloadData() {
    this.employeeService.getEmployeesList().subscribe((res)=>{
      this.employees= res; //(res  as  any).default;
	  this.temp = true;
	  console.log('emp ---' + this.employees);
    })  ;
  }
 
  
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }
  
  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddSearchModalComponent, {
      width: '60%',
      data: {}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   this.email = result;
    // });
  }
}
