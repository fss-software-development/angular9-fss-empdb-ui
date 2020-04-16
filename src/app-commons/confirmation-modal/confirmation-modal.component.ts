import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {DialogData} from './confirmation-modal-data.interface';
@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  public cancelBtnText: string;
  public confirmBtnText: string;
  constructor(public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.confirmBtnText = this.data.confirmButtonText ? this.data.confirmButtonText : "Ok";
      this.cancelBtnText = this.data.cancelButtonText ? this.data.cancelButtonText: "Cancel";
     }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
