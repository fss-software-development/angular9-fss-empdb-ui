import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import {
  AutowireViewModel,
  FormHelperService
} from '../../../../framework';
import {
  CustomerEditFormModel,
  CustomerCommandHandlerService,
  CustomerFormStateService,
  CommonFormLoaderService,
  CommonCommandHandlerService
} from '../../../../services'
var _this;
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit, OnDestroy {
  public regionList: any[];
  public isEditable: boolean = false;
  public title: String;
  @AutowireViewModel('CustomerEdit') customerEditForm: FormGroup;
  private custEditFormData: CustomerEditFormModel;
  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private commandHandlerService: CustomerCommandHandlerService,
              private formStateService: CustomerFormStateService,
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
    this.formHelperService.hideLoadingSpinner.next(true);
    const currentCustomerId = this.route.snapshot.paramMap.get('id');
    this.commandHandlerService.getCustomerById(currentCustomerId);
    this.commonCommandHandlerService.getRegionList();
    
  }
  initSubscriber(): void {
    this.route.data.subscribe((data) => {
      this.title = data.title;
    });
    this.commonFormLoaderService.regionList.subscribe((data) => {
      this.regionList = data;
    })
    this.formStateService.editCustomer   
    .subscribe((data) => {
      if(data){
        this.custEditFormData = data;
        this.customerEditForm.reset(new CustomerEditFormModel(data));
        this.enableDisableForm();
      }
    })
    this.formHelperService.hideLoadingSpinner.next(true);
    setTimeout(function() { 
      _this.setDefaultDropdownValues();
     }, 1000);
  }

  updateCustomer(): void {
    this.formHelperService.hideLoadingSpinner.next(false);
    this.commandHandlerService.updateCustomer(this.customerEditForm.value);
  }
  editCustomer(): void {
    this.isEditable = this.isEditable? false : true;
    this.enableDisableForm();
  }

  enableDisableForm(): void {
    if(this.isEditable){
      this.customerEditForm.enable();
      this.title = "Edit Account";
    } else {
      this.customerEditForm.disable();
    }
  }

  clear(): void {
    this.customerEditForm.reset();
  }

  back(): void {
    this.router.navigate(['master']);
  }

  setDefaultDropdownValues(): void {
    let accData = {
      region: this.regionList[this.regionList.findIndex(x => x.regionId === this.custEditFormData.region.regionId)],
    }
    this.customerEditForm.patchValue(accData);
  }
}
