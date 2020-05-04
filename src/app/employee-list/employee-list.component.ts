import { 
  Component,
  OnInit,
  ViewChild
 } from "@angular/core";
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {
  FormHelperService
} from '../../framework';
import {
  EmployeeFormStateService,
  EmployeeCommandHandlerService,
  EmployeeSearchFormModel,
  EmployeeListFormModel
} from '../../services';
import {AddSearchModalComponent} from './add-search-modal/add-search-modal.component';
import {ConfirmationModalComponent} from '../../app-commons';
@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  public dataSource = new MatTableDataSource<EmployeeListFormModel>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public displayedColumns: string[] = ['employeeName', 'designationName', 'departmentName', 'reportingManager','actions'];
  constructor(
      private commandHandlerService: EmployeeCommandHandlerService,
      private formStateService: EmployeeFormStateService,
      private router: Router,
      public dialog: MatDialog,
      private formHelperService: FormHelperService
     ) {}
  
  ngOnInit() {
    this.commandHandlerService.getEmployeesList();
    this.initSubscriber();
  }

  initSubscriber(): void {
    this.formStateService.employeeList.subscribe((res) => {
     this.dataSource = new MatTableDataSource<EmployeeListFormModel>(res);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
    })
    this.formHelperService.hideLoadingSpinner.next(true);
  }
 
  goToAddEmployee(): void {
    this.router.navigate(['employees/add-employee']);
  }
  deleteEmployee(id: string, name: string) {
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
        this.formHelperService.hideLoadingSpinner.next(false);
        this.commandHandlerService.deleteEmployee(id);
        this.router.navigate(['employees']);
      }
    });
  }

  goToEmployeeDetails(id: any){
    this.router.navigate(['employees/view-employee', id]);
  }
  
  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddSearchModalComponent, {
      width: '60%',
      data: {}
    });
  }
}
