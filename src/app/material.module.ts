import { NgModule } from '@angular/core';

import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  exports: [
    MatTableModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
