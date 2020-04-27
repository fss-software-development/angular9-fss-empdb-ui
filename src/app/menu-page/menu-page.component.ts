import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
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

    isUserLoggedIn$: Observable<boolean>;                 


  ngOnInit() {
   // this.isUserLoggedIn$ = this.authService.isUserLoggedIn;

  }

  
  onSearch(): void {
    this.router.navigate(['/employees']);
  }

  onProjectSearch(): void{
    this.router.navigate(['/master/search-project']);
  }

  onAccountSearch() {
    this.router.navigate(['/master']);
  }

 
}
