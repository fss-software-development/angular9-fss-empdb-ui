import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../login/auth.service';


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
    private authService: AuthenticationService,
    //private authenticationService: AuthenticationService
    ){   }



  ngOnInit() {
   // this.isUserLoggedIn$ = this.authService.isUserLoggedIn;

  }

  
  onSearch(){
    this.router.navigate(['/employees']);
  }

  onProjectSearch(){
    this.router.navigate(['/search-project']);
  }

}
