import { NgModule } from '@angular/core';

import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  exports: [MatTableModule, MatDialogModule]
})
export class MaterialModule {}
