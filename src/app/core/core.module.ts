import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {DatePipe} from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import {MasterService} from '../master.service';
import {AuthGuardService} from '../auth-guard.service';
import {
  EmployeeCommandHandlerService,
  EmployeeFormStateService,
  CustomerCommandHandlerService,
  CustomerFormStateService
} from '../../services';

import {FormModalConverterService} from '../../framework';
import {
  EmployeeDataService,
  EmployeeDataInterface,
  CustomerDataInterface,
  CustomerDataService
} from '../../data-access-layer';
import {AuthenticationService} from '../login/auth.service';
/**
 * The Core Module
 *
 * Core Module will be instantiated only once in the application and so it should be better add to the AppModule.
 * Here all global modules can be referred here that must be available through out the application.
 * Since services are singleton it is better to provide inside this core module.
 */
@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
  ],
  providers: [
    DatePipe,
    MasterService,
    AuthGuardService,
    EmployeeCommandHandlerService,
    EmployeeFormStateService,
    FormModalConverterService,
    CustomerCommandHandlerService,
    CustomerFormStateService,
    {
      provide: EmployeeDataInterface,
      useClass: EmployeeDataService
    },
    {
      provide: CustomerDataInterface,
      useClass: CustomerDataService
    },
    AuthenticationService
  ]
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
