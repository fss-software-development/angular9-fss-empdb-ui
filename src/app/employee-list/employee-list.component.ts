import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  
  constructor(private employeeService: EmployeeService, private router: Router) {}
  
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
    this.employeeService.getEmployeesList().subscribe((res: any[])=>{
      this.employees= res;
	  this.temp = true;
    })  ;
  }
 
  
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
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
}