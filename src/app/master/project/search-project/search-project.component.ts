import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import {MasterService} from '../../../master.service';
import {ConfirmationModalComponent} from '../../../../app-commons';
import {
  AutowireViewModel,
  FormHelperService
} from '../../../../framework';
import {
  ProjectCommandHandlerService,
  ProjectSearchFormModel,
  ProjectListFormModel,
  ProjectFormStateService,
  CustomerCommandHandlerService,
  CustomerFormStateService
} from '../../../../services';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface project {
  projectName: string;
  account:{
    accountName:string;
  };
  region: {
    regionName:string;
  };
  
}


@Component({
  selector: 'app-search-project',
  templateUrl: './search-project.component.html',
  styleUrls: ['./search-project.component.css']
})
export class SearchProjectComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  projects: any;
  public regionList: any[];
  public accountList: any[];
  public apiResponse: ProjectSearchFormModel[];
  public dataSource = new MatTableDataSource<ProjectListFormModel>();

  public displayedColumns: string[] = ['projectName', 'account', 'region','projectStartDate','projectEndDate','action'];


  @AutowireViewModel('ProjectSearch') projectSearchForm: FormGroup;
  constructor(private masterService: MasterService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              private projectCommandHandlerService: ProjectCommandHandlerService,
              private customerCommandHandlerService: CustomerCommandHandlerService,
              private projectFormStateService: ProjectFormStateService,
              private customerFormStateService: CustomerFormStateService,
              private formHelperService: FormHelperService
            ) { }

  ngOnInit(): void {
    this.buidForm();
    this.projectCommandHandlerService.getProjectList();
    this.customerCommandHandlerService.getCustomersList();
    this.initSubscriber();
    this.getRegionList();
  }
  ngOnDestroy(): void {
    this.projectFormStateService.destroyFormState();
    this.customerFormStateService.destroyFormState();
    this.resetForm();
  }

  buidForm(): void {
    this.projectSearchForm.reset(new ProjectSearchFormModel());
  }
  initSubscriber():void{
    this.projectFormStateService.projectList.subscribe((data) => {
      this.dataSource = new MatTableDataSource<ProjectListFormModel>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
     })
     this.customerFormStateService.customerList.subscribe((res) => {
      this.accountList = res;
    })

  }
  
  getRegionList(): void {
    this.masterService.getRegion().subscribe((data) => {
      this.regionList = data;
    })
  }
  goToAddProject(): void {
    this.router.navigate(['master/add-project']);
  }

  viewProjectDetails(id: number): void {
    this.router.navigate(['master/view-project', id]);
  }

  resetForm(): void {
    this.projectSearchForm.reset();
  }

  deleteProject(id: any, name: string): void {
    const msg = `Are you sure want to delete ${name} ?`;
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '50%',
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
        this.projectCommandHandlerService.deleteProject(id);
        this.router.navigate(['master/search-project']);
      }
    });
  }
  onProjectSearch(): void {
    this.projectCommandHandlerService.getProjectListOnSearch(this.projectSearchForm.value);
    this.resetForm();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
