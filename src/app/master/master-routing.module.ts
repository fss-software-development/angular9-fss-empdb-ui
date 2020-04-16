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
