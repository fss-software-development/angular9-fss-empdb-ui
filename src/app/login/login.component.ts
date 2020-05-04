import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './auth.service';
import {
  FormHelperService,
  AutowireViewModel
} from '../../framework';
import {
  LoginFormModel,
  LoginCommandHandlerService,
  LocationFormModel
} from '../../services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  username: string;
  password : string;
  errorMessage = null;
  successMessage: string;
  invalidLogin = false;
  @AutowireViewModel('Login') loginForm: FormGroup; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formHelperService: FormHelperService,
    private loginCommandHandlerService: LoginCommandHandlerService
    //private authenticationService: AuthenticationService
    ){   }

  ngOnInit() {
    
    sessionStorage.setItem('token', '');
    this.initForm();
    this.loginForm.valueChanges.subscribe((data) =>{
      this.errorMessage = null;
    })
  }
  ngOnDestroy() {
    this.clear();
  }

  initForm(): void {
    this.loginForm.reset(new LocationFormModel());
    this.formHelperService.hideLoadingSpinner.next(true);
    this.formHelperService.isMenuEnabled.next(false);
  }
  clear(): void {

  }
  /*handleLogin() {
    this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
        this.invalidLogin = false;
        this.loginSuccess = true;
      
      this.router.navigate(['/menu-page']);
    }, () => {
      this.invalidLogin = false;
      this.loginSuccess = true;
    });      
  }*/

  
    

  handleLogin(){
    if(this.loginForm.valid){
      this.errorMessage = null;
      this.formHelperService.hideLoadingSpinner.next(false);
      this.loginCommandHandlerService.login(this.loginForm.value, '/employees');
      this.loginCommandHandlerService.isloggedIn.subscribe((res) =>{
        if(res){
          this.formHelperService.isMenuEnabled.next(true);
          this.formHelperService.isLoggedIn.next(true);
          this.router.navigate(['/employees']);
        } else {
          this.errorMessage = 'Login Failed...!';
        }
      });
    }
    
  }

}