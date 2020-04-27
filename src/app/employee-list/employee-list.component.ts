import { 
  Component,
  OnInit
 } from "@angular/core";
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {AutowireViewModel} from '../../framework';
import {
  EmployeeFormStateService,
  EmployeeCommandHandlerService,
  EmployeeSearchFormModel
} from '../../services';
import {AddSearchModalComponent} from './add-search-modal/add-search-modal.component'
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  constructor(
      private commandHandlerService: EmployeeCommandHandlerService,
      private formStateService: EmployeeFormStateService,
      private router: Router,
      public dialog: MatDialog
     ) {}
  
  public employees: any;
  public temp: Object=false;
   
  dtOptions: DataTables.Settings = {};
  
  ngOnInit() {
    this.commandHandlerService.getEmployeesList();
    this.initSubscriber();
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5
      };
}

  initSubscriber(): void{
    this.formStateService.employeeList.subscribe((res) => {
      console.log("initSubscriber", res);
      this.employees= res;
      this.temp = true;
    })
  }
 
  
  deleteEmployee(id: number) {
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
  }
}
