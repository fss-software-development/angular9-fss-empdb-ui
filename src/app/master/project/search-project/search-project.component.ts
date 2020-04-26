import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import {MasterService} from '../../../master.service';
import {ConfirmationModalComponent} from '../../../../app-commons/confirmation-modal/confirmation-modal.component';
import { FormGroup } from '@angular/forms';
import {AutowireViewModel} from '../../../../framework';
import {
  ProjectCommandHandlerService,
  ProjectSearchFormModel,
  ProjectFormStateService,
  CustomerCommandHandlerService,
  CustomerFormStateService
} from '../../../../services';


@Component({
  selector: 'app-search-project',
  templateUrl: './search-project.component.html',
  styleUrls: ['./search-project.component.css']
})
export class SearchProjectComponent implements OnInit, OnDestroy {

 
  dtOptions: DataTables.Settings = {};
  project: any;
  public temp: Object=false;
  public regionList: any[];
  public accountList: any[];
  @AutowireViewModel('ProjectSearch') projectSearchForm: FormGroup;
  @AutowireViewModel('CustomerSearch') customerSearchForm: FormGroup;
  constructor(private masterService: MasterService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,
              private projectCommandHandlerService: ProjectCommandHandlerService,
              private customerCommandHandlerService: CustomerCommandHandlerService,
              private projectFormStateService: ProjectFormStateService,
              private customerFormStateService: CustomerFormStateService
            ) { }

  ngOnInit(): void {
    this.buidForm();
    this.projectCommandHandlerService.getProjectList(this.projectSearchForm.value);
    this.customerCommandHandlerService.getCustomersList();
    this.initSubscriber();
    this.getRegionList();
    this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 5
      };
  }
  ngOnDestroy(): void {
    this.projectFormStateService.destroyFormState();
    this.customerFormStateService.destroyFormState();
    this.resetForm();
  }
  buidForm(): void {
    this.projectSearchForm.reset(new ProjectSearchFormModel());
  }
  initSubscriber(): void {
    this.projectFormStateService.projectList.subscribe((res) => {
      this.project= res;
      this.temp = true;
    })
    this.customerFormStateService.customerList.subscribe((res) => {
      console.log("customerList", res);
      this.accountList = res;
    })
  }
  
  getRegionList(): void {
    this.masterService.getRegion().subscribe((data) => {
      this.regionList = data;
    })
  }
  goToAddProject(): void {
    this.router.navigate(['add-project']);
  }

  viewProjectDetails(id: number): void {
    console.log("viewProjectDetails");
    this.router.navigate(['view-project', id]);
  }
  resetForm(): void {
    this.projectSearchForm.reset();
  }
  deleteProject(id: number, name: string): void {
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
  onProjectSearch(): void {
    this.projectCommandHandlerService.getProjectListOnSearch(this.projectSearchForm.value);
    this.resetForm();
  }

}
