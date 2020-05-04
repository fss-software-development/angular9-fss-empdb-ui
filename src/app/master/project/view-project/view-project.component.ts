import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  AutowireViewModel,
  FormHelperService
} from '../../../../framework';
import {
  ProjectEditFormModel,
  ProjectCommandHandlerService,
  ProjectFormStateService,
  CustomerCommandHandlerService,
  CustomerFormStateService,
  CommonFormLoaderService,
  CommonCommandHandlerService
} from '../../../../services'

var _this;
@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  public regionList: any[];
  public accountList: any[];
  public isEditable: boolean = false;
  public title: String;
  @AutowireViewModel('ProjectEdit') projectEditForm: FormGroup;
  private projectEditFormData: ProjectEditFormModel;
  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private projectCommandHandlerService: ProjectCommandHandlerService,
              private customerCommandHandlerService: CustomerCommandHandlerService,
              private projectFormStateService: ProjectFormStateService,
              private customerFormStateService: CustomerFormStateService,
              private formHelperService: FormHelperService,
              private commonCommandHandlerService: CommonCommandHandlerService,
              private commonFormLoaderService: CommonFormLoaderService,
          ) {
            _this = this;
           }

  ngOnInit(): void {
    this.initData();
    this.initSubscriber();
  }
  ngOnDestroy(): void {
    this.clear();
  }
  initData():void {
    const currentProjectId = this.route.snapshot.paramMap.get('id');
    this.projectCommandHandlerService.getProjectById(currentProjectId);
    this.customerCommandHandlerService.getCustomersList();
    this.commonCommandHandlerService.getRegionList();
  }
  initSubscriber(): void {
    this.route.data.subscribe((data) => {
      this.title = data.title;
    });
    this.customerFormStateService.customerList.subscribe((data) => {
      this.accountList = data;
    })
    this.commonFormLoaderService.regionList.subscribe((data) => {
      this.regionList = data;
    })
    this.projectFormStateService.editProject  
    .subscribe((data) => {
      if(data){
        this.projectEditFormData = data;
        this.projectEditForm.reset(new ProjectEditFormModel(data));
        this.enableDisableForm();
      }
    })
    setTimeout(function() { 
      _this.setDefaultDropdownValues();
     }, 1000);
    this.formHelperService.hideLoadingSpinner.next(true);
  }

  updateProject(): void {
    this.formHelperService.hideLoadingSpinner.next(false);
    this.projectCommandHandlerService.updateProject(this.projectEditForm.value);
  }
  editProject(): void {
    this.isEditable = this.isEditable? false : true;
    this.enableDisableForm();
  }

  enableDisableForm(): void {
    if(this.isEditable){
      this.projectEditForm.enable();
      this.title = "Edit Project";
    } else {
      this.projectEditForm.disable();
    }
  }

  clear(): void {
    this.projectEditForm.reset();
  }

  back(): void {
    this.router.navigate(['master/search-project']);
  }
  
  setDefaultDropdownValues(): void {
    let projectData = {
      region: this.regionList[this.regionList.findIndex(x => x.regionId === this.projectEditFormData.region.regionId)],
      account: this.accountList[this.accountList.findIndex(x => x.accountId === this.projectEditFormData.account.accountId)]
    }
    this.projectEditForm.patchValue(projectData);
  }
}
