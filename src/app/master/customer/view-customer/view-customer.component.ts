import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import {AutowireViewModel} from '../../../../framework';
import {
  CustomerEditFormModel,
  CustomerCommandHandlerService,
  CustomerFormStateService
} from '../../../../services'
import {MasterService}  from '../../../master.service';
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
  private selectedRegion: any = null;
  private custEditFormData: CustomerEditFormModel;
  constructor(
              private masterService: MasterService,
              public dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private commandHandlerService: CustomerCommandHandlerService,
              private formStateService: CustomerFormStateService
          ) { }

  ngOnInit(): void {
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
    const currentCustomerId = this.route.snapshot.paramMap.get('id');
    this.commandHandlerService.getCustomerById(currentCustomerId);
    
  }
  initSubscriber(): void {
    this.formStateService.editCustomer   
    .subscribe((data) => {
      if(data){
        console.log('initSubscriber', data);
        this.custEditFormData = data;
        this.customerEditForm.reset(new CustomerEditFormModel(data));
        this.customerEditForm.controls['region'].setValue(data.region.regionId);
        this.enableDisableForm();
      }
    })
  }
  onRegionChange(regionData) : void {
    this.selectedRegion = {
      region : {
        regionId: regionData.source.selected.value,
        regionName: regionData.source.selected._element.nativeElement.textContent.trim()
      }
    }
  }
  getRegion(): void {
    this.masterService.getRegion().subscribe((data) => {
      this.regionList = data;
    })
  }

  updateCustomer(): void {
    if(this.selectedRegion){
      this.customerEditForm.patchValue(this.selectedRegion);
    } else {
      this.customerEditForm.reset(new CustomerEditFormModel(this.custEditFormData));
    }
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
}
