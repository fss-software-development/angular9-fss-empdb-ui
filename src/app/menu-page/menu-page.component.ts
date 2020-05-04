import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './../login/auth.service';
import {FormHelperService} from '../../framework';
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
  enable_menu_page = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private formHelperService: FormHelperService
    ){   }

    isUserLoggedIn$: Observable<boolean>;                 


    ngOnInit(): void{
      this.formHelperService.isMenuEnabled.subscribe((data) => {
        if(data){
          this.enable_menu_page = data;
        }
     })
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
