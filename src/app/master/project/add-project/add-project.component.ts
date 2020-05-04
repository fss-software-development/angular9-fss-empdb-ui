import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  AutowireViewModel,
  FormHelperService
} from '../../../../framework';
import {
  ProjectAddFormModel,
  ProjectCommandHandlerService,
  CustomerCommandHandlerService,
  CustomerFormStateService,
  CommonFormLoaderService,
  CommonCommandHandlerService
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
          private router: Router,
          private projectCommandHandlerService: ProjectCommandHandlerService,
          private customerCommandHandlerService: CustomerCommandHandlerService,
          private customerFormStateService: CustomerFormStateService,
          private formHelperService:FormHelperService,
          private commonCommandHandlerService: CommonCommandHandlerService,
          private commonFormLoaderService: CommonFormLoaderService
          ) { }

  ngOnInit(): void {
    this.customerCommandHandlerService.getCustomersList();
    this.commonCommandHandlerService.getRegionList();
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
    this.commonFormLoaderService.regionList.subscribe((data) => {
      this.regionList = data;
    })
    this.formHelperService.hideLoadingSpinner.next(true);
  }

  addProject(): void {
    this.formHelperService.hideLoadingSpinner.next(false);
    this.projectCommandHandlerService.addProject(this.projectAddForm.value);
  }
  clear(): void {
    this.projectAddForm.reset();
  }

  back(): void {
    this.router.navigate(['master/search-project']);
  }
 

}
