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
import { MaterialModule } from '../material.module';
import {FirstLetterCapitalizedPipe} from './pipe/first-letter-capitalized.pipe';
import {InitialsPipe} from './pipe/initials.pipe';
import { ConfirmationModalComponent } from '../../app-commons/confirmation-modal/confirmation-modal.component';

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
  ],
  providers: [
  ]
})
export class SharedModule {
}
