import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MasterService}  from '../../../master.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {

    public regionList: any[];
    public projectName: FormControl = new FormControl();
    public region: FormControl = new FormControl();
    constructor(
                private masterService: MasterService,
                public dialog: MatDialog
            ) { }
  
    ngOnInit(): void {
    }

}
