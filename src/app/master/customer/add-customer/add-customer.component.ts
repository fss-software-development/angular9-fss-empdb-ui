import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AutowireViewModel} from '../../../../framework';
import {
  CustomerAddFormModel,
  CustomerCommandHandlerService,
  CustomerFormStateService
} from '../../../../services'
import {MasterService}  from '../../../master.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit, OnDestroy {
  public regionList: any[];
  @AutowireViewModel('CustomerAdd') customerAddForm: FormGroup;
  constructor(
          private masterService: MasterService,
          private route: ActivatedRoute,
          private router: Router,
          private commandHandlerService: CustomerCommandHandlerService,
          private formStateService: CustomerFormStateService
          ) { }

  ngOnInit(): void {
    this.buidForm();
    this.getRegion();
  }
  ngOnDestroy(): void {
    this.clear();
  }
  buidForm(): void {
    this.customerAddForm.reset(new CustomerAddFormModel());
  }
  getRegion(): void {
    this.masterService.getRegion().subscribe((data) => {
      this.regionList = data;
    })
  }
  addCustomer(): void {
    this.commandHandlerService.addCustomer(this.customerAddForm.value);
  }
  clear(): void {
    this.customerAddForm.reset();
  }

  back(): void {
    this.router.navigate(['master']);
  }
}
