import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import {MasterService}  from '../../../master.service';
import {ConfirmationModalComponent} from '../../../../app-commons/confirmation-modal/confirmation-modal.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import {AutowireViewModel} from '../../../../framework';
import {
  ProjectEditFormModel,
  ProjectCommandHandlerService,
  ProjectFormStateService,
  CustomerCommandHandlerService,
  CustomerFormStateService
} from '../../../../services'


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
  private selectedRegion: any = null;
  private selectedAccount: any = null;
  private projectEditFormData: ProjectEditFormModel;
  constructor(
              private masterService: MasterService,
              public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private projectCommandHandlerService: ProjectCommandHandlerService,
              private customerCommandHandlerService: CustomerCommandHandlerService,
              private projectFormStateService: ProjectFormStateService,
              private customerFormStateService: CustomerFormStateService
          ) { }

  ngOnInit(): void {
    this.customerCommandHandlerService.getCustomersList();
    this.getRegion();
    this.initData();
    this.initSubscriber();
  }
  ngOnDestroy(): void {
    this.clear();
  }
  initData():void {
    this.route.data.subscribe((data) => {
      this.title = data.title;
    });
    const currentProjectId = this.route.snapshot.paramMap.get('id');
    this.projectCommandHandlerService.getProjectById(currentProjectId);
    
  }
  initSubscriber(): void {
    this.customerFormStateService.customerList.subscribe((data) => {
      this.accountList = data;
    })
    this.projectFormStateService.editProject  
    .subscribe((data) => {
      if(data){
        this.projectEditFormData = data;
        this.projectEditForm.reset(new ProjectEditFormModel(data));
        this.projectEditForm.controls['account'].setValue(data.account.accountId);
        this.projectEditForm.controls['region'].setValue(data.region.regionId);
        this.enableDisableForm();
      }
    })
  }
  onDropdownChange(selectedData: any, controlName: string) : void {
    const selectedDataSource = selectedData.source.selected;
    if (controlName === "region") {
      this.selectedRegion = {
          regionId: selectedDataSource.value,
          regionName: selectedDataSource._element.nativeElement.textContent.trim()
      }
    } else if (controlName === "account") {
      this.selectedAccount = {
          accountId: selectedDataSource.value,
          accountName: selectedDataSource._element.nativeElement.textContent.trim(),
          region: {}
      }
    }
  }
  getRegion(): void {
    this.masterService.getRegion().subscribe((data) => {
      this.regionList = data;
    })
  }

  updateProject(): void {
      if(this.selectedRegion && !this.selectedAccount){
        this.projectEditForm.patchValue({
          projectId: this.projectEditFormData.projectId,
          projectName: this.projectEditFormData.projectName,
          region: this.selectedRegion,
          account: this.projectEditFormData.account,
          projectStartDate: this.projectEditFormData.projectStartDate,
          projectEndDate: this.projectEditFormData.projectEndDate,
        })
      } else if( this.selectedAccount && !this.selectedRegion){
        this.projectEditForm.patchValue({
          projectId: this.projectEditFormData.projectId,
          projectName: this.projectEditFormData.projectName,
          region: this.projectEditFormData.region,
          account: this.selectedAccount,
          projectStartDate: this.projectEditFormData.projectStartDate,
          projectEndDate: this.projectEditFormData.projectEndDate,
        });
      } else if(this.selectedAccount && this.selectedRegion) {
        this.projectEditForm.patchValue({
          projectId: this.projectEditFormData.projectId,
          projectName: this.projectEditFormData.projectName,
          region: this.selectedRegion,
          account: this.selectedAccount,
          projectStartDate: this.projectEditFormData.projectStartDate,
          projectEndDate: this.projectEditFormData.projectEndDate,
        });
      } else {
      this.projectEditForm.reset(new ProjectEditFormModel(this.projectEditFormData));
    }
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
  
  
}
