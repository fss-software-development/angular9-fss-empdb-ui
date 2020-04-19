import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { BasicAuthHtppInterceptorService } from './httpInterceptor.service';
import { MenuComponent } from './menu/menu.component';
import {MenuPageComponent} from './menu-page/menu-page.component';
import { AddSearchModalComponent } from './employee-list/add-search-modal/add-search-modal.component';
import {MasterComponent} from './master/master.component';
import {ProjectComponent} from './master/project/project.component';
import {AddProjectComponent} from './master/project/add-project/add-project.component';
import {ViewProjectComponent} from './master/project/view-project/view-project.component';
import {SearchProjectComponent} from './master/project/search-project/search-project.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    LoginComponent,
	  LogoutComponent,
    MenuComponent,
    MenuPageComponent,
    AddSearchModalComponent,
    MasterComponent,
    ProjectComponent,
    AddProjectComponent,
    ViewProjectComponent,
    SearchProjectComponent
    ],
    
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
	  DataTablesModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  entryComponents: [AddSearchModalComponent],
  providers: [
   {
      provide: HTTP_INTERCEPTORS,
      useClass:BasicAuthHtppInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
