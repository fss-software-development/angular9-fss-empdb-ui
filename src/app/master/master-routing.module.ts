import { NgModule} from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { MasterComponent} from './master.component';
import { SearchProjectComponent } from './project/search-project/search-project.component';
import { AddProjectComponent } from './project/add-project/add-project.component';
import { ViewProjectComponent } from './project/view-project/view-project.component';
import {SearchCustomerComponent} from './customer/search-customer/search-customer.component';
import {AddCustomerComponent} from './customer/add-customer/add-customer.component';
import {ViewCustomerComponent} from './customer/view-customer/view-customer.component';
const MASTER_ROUTES: Routes = [
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
          title: 'Search Account'
        },
      },
      {
        path: 'add-customer',
        component: AddCustomerComponent,
        data: {
          title: 'Add Account'
        },
      },
      {
        path: 'view-customer/:id',
        component: ViewCustomerComponent,
        data: {
          title: 'View Account'
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
        path: 'view-project/:id',
        component: ViewProjectComponent,
        data: {
          title: ' View Project '
        },
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(MASTER_ROUTES)],
  exports: [
    RouterModule
  ],
  providers: []
})
export class MasterRoutingModule {
}
