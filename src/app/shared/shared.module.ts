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
import { NgxSpinnerModule } from 'ngx-spinner';
import {TranslateModule} from '@ngx-translate/core';
import {FirstLetterCapitalizedPipe} from './pipe/first-letter-capitalized.pipe';
import {InitialsPipe} from './pipe/initials.pipe';
import {
  OnScreenMessageComponent,
  MultiKeyTranslatePipe
} from '../../framework';
import { 
  ConfirmationModalComponent,
  LoadingAnimationComponent,
  HeaderComponent
 } from '../../app-commons';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    DataTablesModule,
    NgxSpinnerModule,
    TranslateModule
  ],
  declarations: [
    FirstLetterCapitalizedPipe,
    InitialsPipe,
    ConfirmationModalComponent,
    OnScreenMessageComponent,
    LoadingAnimationComponent,
    HeaderComponent,
    MultiKeyTranslatePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    DataTablesModule,
    NgxSpinnerModule,
    TranslateModule,
    FirstLetterCapitalizedPipe,
    InitialsPipe,
    OnScreenMessageComponent,
    ConfirmationModalComponent,
    LoadingAnimationComponent,
    HeaderComponent,
    MultiKeyTranslatePipe
  ],
  providers: [
  ]
})
export class SharedModule {
}
