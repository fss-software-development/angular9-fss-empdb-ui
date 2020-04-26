import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthHtppInterceptorService } from './httpInterceptor.service';
import { MenuComponent } from './menu/menu.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { AddSearchModalComponent } from './employee-list/add-search-modal/add-search-modal.component';
import { MasterModule } from './master/master.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

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
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    MasterModule
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
