import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './login/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
  title = 'FSS Employee Database';
  enable_menu_page=true;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
    ){ }

  ngOnInit(): void{
    // if (this.authenticationService.isUserLoggedIn())
    //     this.enable_menu_page = true;
  }
}

