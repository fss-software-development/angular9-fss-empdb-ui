import { NgModule } from '@angular/core';
import { MasterComponent } from './master.component';
import {MasterRoutingModule} from './master-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { SearchCustomerComponent } from './customer/search-customer/search-customer.component';
import { DeleteCustomerComponent } from './customer/delete-customer/delete-customer.component';
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import {SharedModule} from '../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import { ProjectComponent } from './project/project.component';
import { SearchProjectComponent } from './project/search-project/search-project.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { DataTablesModule } from 'angular-datatables';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [MasterComponent, CustomerComponent, AddCustomerComponent, SearchCustomerComponent, 
    DeleteCustomerComponent, ViewCustomerComponent,ProjectComponent,SearchProjectComponent,AddProjectComponent
  ,ViewProjectComponent,],
  
  imports: [
    MasterRoutingModule,
    SharedModule,
    MatIconModule,
    DataTablesModule,
    MaterialModule

  ]
})
export class MasterModule { }
