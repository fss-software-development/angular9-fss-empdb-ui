import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewDetailsComponent } from './view-details/view-details.component';


@Component({
  selector: 'app-search-project',
  templateUrl: './search-project.component.html',
  styleUrls: ['./search-project.component.css']
})
export class SearchProjectComponent implements OnInit {

 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,

    //private authenticationService: AuthenticationService
    ){}

    dtOptions: DataTables.Settings = {};


  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }


  onAddProject(){
    this.router.navigate(['/add-project']);
  }

  onViewDetails(): void{
    const dialogRef= this.dialog.open( ViewDetailsComponent,{
      width: '60%',
      data: {}
    })
     }

}
