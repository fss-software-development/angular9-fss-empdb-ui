import { Router, ActivatedRoute } from '@angular/router';
import { ViewProjectComponent } from '../view-project/view-project.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MasterService} from '../../../master.service';
import { FormControl } from '@angular/forms';
import {ConfirmationModalComponent} from '../../../../app-commons/confirmation-modal/confirmation-modal.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {AutowireViewModel} from '../../../../framework';
import {
  ProjectAddFormModel,
  ProjectCommandHandlerService,
  ProjectFormStateService,
  CustomerCommandHandlerService,
  CustomerFormStateService
} from '../../../../services';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit , OnDestroy{

  public regionList: any[];
  public accountList: any[];
  @AutowireViewModel('ProjectAdd') projectAddForm: FormGroup;
  constructor(
          private masterService: MasterService,
          private route: ActivatedRoute,
          private router: Router,
          private projectCommandHandlerService: ProjectCommandHandlerService,
          private customerCommandHandlerService: CustomerCommandHandlerService,
          private projectFormStateService: ProjectFormStateService,
          private customerFormStateService: CustomerFormStateService
          ) { }

  ngOnInit(): void {
    this.customerCommandHandlerService.getCustomersList();
    this.initSubscriber();
    this.buidForm();
  }
  ngOnDestroy(): void {
    this.clear();
  }

  todayDate:Date = new Date();

  buidForm(): void {
    this.projectAddForm.reset(new ProjectAddFormModel());
  }
  initSubscriber(): void {
    this.customerFormStateService.customerList.subscribe((data) => {
      this.accountList = data;
    })
    this.masterService.getRegion().subscribe((data) => {
      this.regionList = data;
    })
  }

  addProject(): void {
    this.projectCommandHandlerService.addProject(this.projectAddForm.value);
  }
  clear(): void {
    this.projectAddForm.reset();
  }

  back(): void {
    this.router.navigate(['master']);
  }
 

}
