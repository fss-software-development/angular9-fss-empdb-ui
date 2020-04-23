import {NgModule} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {MasterComponent} from './master.component';
import {SearchCustomerComponent} from './customer/search-customer/search-customer.component';
import {AddCustomerComponent} from './customer/add-customer/add-customer.component';
import {ViewCustomerComponent} from './customer/view-customer/view-customer.component';
import {DeleteCustomerComponent} from './customer/delete-customer/delete-customer.component';
import { SearchProjectComponent } from './project/search-project/search-project.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import { from } from 'rxjs';
const USERS_LIST_ROUTES: Routes = [
  {
    path: 'master',
    data: {
      title: 'Masters'
    },
    component: MasterComponent,
    children: [
      {
        path: '',
        component: SearchCustomerComponent,
        data: {
          title: 'Search Customer'
        },
      },
      {
        path: 'addcustomer',
        component: AddCustomerComponent,
        data: {
          title: 'Add Customer'
        },
      },
      {
        path: 'editcustomer/:id',
        component: ViewCustomerComponent,
        data: {
          title: 'View Customer'
        },
      },
      {
        path: 'search-project',
        component: SearchProjectComponent,
        data: {
          title: 'Search Project'
        },
      },
      {
        path: 'add-project',
        component: AddProjectComponent,
        data: {
          title: 'Add Project'
        },
      },
      {
        path: 'view-project',
        component: ViewProjectComponent,
        data: {
          title: 'View Project '
        },
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(USERS_LIST_ROUTES)],
  exports: [
    RouterModule
  ],
  providers: []
})
export class MasterRoutingModule {
}
