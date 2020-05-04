import { Component, OnInit,ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  AutowireViewModel,
  FormHelperService
} from '../../../../framework';
import { 
   Router,
   ActivatedRoute
   } from '@angular/router';
import {MasterService} from '../../../master.service';
import {
  CustomerCommandHandlerService,
  CustomerSearchFormModel,
  CustomerFormStateService,
  CustomerListFormModel
} from '../../../../services';
import {ConfirmationModalComponent} from '../../../../app-commons';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface customer {

  accountName: string;
  region: number;
}

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  customers: any;
  public regionList: any[];
  public accountList: any[];
  public title: String;
  public apiResponse: CustomerSearchFormModel[];
  public dataSource = new MatTableDataSource<CustomerListFormModel>();

  public displayedColumns: string[] = [ 'accountName', 'region','action'];



  @AutowireViewModel('CustomerSearch') customerSearchForm: FormGroup;
  constructor(private masterService: MasterService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              private formStateService: CustomerFormStateService,
              private commandHandlerService: CustomerCommandHandlerService,
              private formHelperService: FormHelperService

              
            ) { }

  ngOnInit(): void {
    this.buidForm();
    this.commandHandlerService.getCustomersList();
    this.initSubscriber();
    this.getRegionList();
  }
  buidForm(): void {
    this.customerSearchForm.reset(new CustomerSearchFormModel());
  }
  initSubscriber(): void {
   this.route.data.subscribe((data) => {
      this.title = data.title;
    });
    this.formStateService.customerList.subscribe((data) => {
      this.dataSource = new MatTableDataSource<CustomerListFormModel>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     })

     this.formStateService.customerList.subscribe((res) => {
      this.accountList = res;

    })
    this.formHelperService.hideLoadingSpinner.next(true);

  }
  
  getRegionList(): void {
    this.masterService.getRegion().subscribe((data) => {
      this.regionList = data;
    })
  }
  goToAddCustomer(): void {
    this.router.navigate(['master/add-customer']);
  }

  viewCustomerDetails(id: number): void {
    this.router.navigate(['master/view-customer', id]);
  }

  deleteCustomer(id: any, name: string): void {
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
        this.commandHandlerService.deleteCustomer(id);
        this.router.navigate(['master']);
      }
    });
  }
  onCustomerSearch(): void {
    this.formHelperService.hideLoadingSpinner.next(false);
    this.commandHandlerService.getCustomersListOnSearch(this.customerSearchForm.value);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

