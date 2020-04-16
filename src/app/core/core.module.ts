import {
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {DatePipe} from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { throwIfAlreadyLoaded } from './module-import-guard';
import {MasterService} from '../master.service';
import {EmployeeService} from '../employee.service';
import {AuthGuardService} from '../auth-guard.service';
// import {
 
// } from 'services';

// import {
  
// } from 'framework';

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
    EmployeeService,
    AuthGuardService
  ]
})

export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
