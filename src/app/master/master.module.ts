import { NgModule } from '@angular/core';
import { MasterComponent } from './master.component';
import {MasterRoutingModule} from './master-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { SearchCustomerComponent } from './customer/search-customer/search-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import {SharedModule} from '../shared/shared.module'

@NgModule({
  declarations: [MasterComponent, CustomerComponent, AddCustomerComponent, SearchCustomerComponent, DeleteCustomerComponent, ViewCustomerComponent],
  imports: [
    MasterRoutingModule,
    SharedModule
  ]
})
export class MasterModule { }
