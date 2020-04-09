import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
interface DialogData {
  email: string;
}
@Component({
  selector: 'app-add-search-modal',
  templateUrl: './add-search-modal.component.html',
  styleUrls: ['./add-search-modal.component.css']
})
export class AddSearchModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSearchModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
