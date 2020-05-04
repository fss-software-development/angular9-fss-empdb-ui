import { NgModule } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { SearchProjectComponent } from './project/search-project/search-project.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { SearchCustomerComponent } from './customer/search-customer/search-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import {MasterRoutingModule} from './master-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MasterComponent } from './master.component';
import { DeleteProjectComponent } from './project/delete-project/delete-project.component';

@NgModule({
  declarations: [
    MasterComponent,
    ProjectComponent,
    SearchProjectComponent,
    AddProjectComponent,
    ViewProjectComponent,
    DeleteProjectComponent,
    CustomerComponent, 
    AddCustomerComponent, 
    SearchCustomerComponent, 
    DeleteCustomerComponent, 
    ViewCustomerComponent
  ],

  imports: [
    MasterRoutingModule,
    SharedModule
  ],

})
export class MasterModule { }
