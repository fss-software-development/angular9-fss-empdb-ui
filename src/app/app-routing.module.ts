import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import{ MenuPageComponent }from './menu-page/menu-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' ,canActivate:[AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGuardService]},
  { path: 'employees', component: EmployeeListComponent,canActivate:[AuthGuardService] },
  { path: 'add', component: CreateEmployeeComponent,canActivate:[AuthGuardService] },
  { path: 'update/:id', component: UpdateEmployeeComponent,canActivate:[AuthGuardService] },
  { path: 'details/:id', component: EmployeeDetailsComponent,canActivate:[AuthGuardService] },
  {path: 'menu-page', component: MenuPageComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomponent= [LoginComponent, LogoutComponent ,EmployeeListComponent ,CreateEmployeeComponent,
  UpdateEmployeeComponent,EmployeeDetailsComponent,MenuPageComponent]
