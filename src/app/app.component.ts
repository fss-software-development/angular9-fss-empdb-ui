import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
  title = 'FSS Employee Database';
  enable_menu_page=false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    //private authenticationService: AuthenticationService
    ){ }


  onlogin(){
    this.enable_menu_page=true;
    this.router.navigate(['/menu-page']);
  }
   
}

