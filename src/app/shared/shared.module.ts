import {NgModule} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import {FirstLetterCapitalizedPipe} from './pipe/first-letter-capitalized.pipe';
import {InitialsPipe} from './pipe/initials.pipe';
import {OnScreenMessageComponent} from '../../framework';
import { 
  ConfirmationModalComponent
 } from '../../app-commons';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    DataTablesModule
  ],
  declarations: [
    FirstLetterCapitalizedPipe,
    InitialsPipe,
    ConfirmationModalComponent,
    OnScreenMessageComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    DataTablesModule,
    FirstLetterCapitalizedPipe,
    InitialsPipe,
    OnScreenMessageComponent,
    ConfirmationModalComponent
  ],
  providers: [
  ]
})
export class SharedModule {
}
