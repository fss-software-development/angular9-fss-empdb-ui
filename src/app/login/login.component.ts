import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    //private authenticationService: AuthenticationService
    ){   }

  ngOnInit() {
	  sessionStorage.setItem('token', '');
  }

  /*handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
        this.invalidLogin = false;
        this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      this.router.navigate(['/menu-page']);
    }, () => {
      this.invalidLogin = false;
      this.loginSuccess = true;
    });      
  }*/

  handleLogin(){
    this.router.navigate(['/menu-page']);
  }
}