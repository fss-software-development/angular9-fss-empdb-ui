import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    //private authenticationService: AuthenticationService
    ){   }
  ngOnInit(): void {
  }

  
  onSearch(){

    this.router.navigate(['/employees']);
  }

  onProjectSearch(){
    this.router.navigate(['/search-project']);
  }


 
}
