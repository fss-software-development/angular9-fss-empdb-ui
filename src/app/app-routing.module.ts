import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' ,canActivate:[AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGuardService]},
  { 
    path: 'employees',
    canActivate:[AuthGuardService],
    children: [
      {
        path: '',
        component: EmployeeListComponent,
        data: {
          title: 'Search Employees'
        },
      },
      {
        path: 'add-employee',
        component: CreateEmployeeComponent,
        data: {
          title: 'Add Employee'
        },
      },
      {
        path: 'view-employee/:id',
        component: EmployeeDetailsComponent,
        data: {
          title: 'View Employee'
        },
      }
    ]
  },
  { path: 'master', redirectTo: '/master', pathMatch: 'full' ,canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }