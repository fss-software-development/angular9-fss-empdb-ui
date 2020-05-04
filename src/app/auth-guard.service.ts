import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './login/auth.service';
import {
  FormHelperService
} from '../framework';
@Injectable()
export class AuthGuardService implements CanActivate {
  
  constructor(private router: Router,
    private authService: AuthenticationService,
    private formHelperService: FormHelperService
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    /*if (this.authService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;*/
    let isAllowed: boolean = false;
    this.formHelperService.isLoggedIn.subscribe((res) => {
      if(!res){
        isAllowed = false
      } else {
        isAllowed = true;
      }
    })
    return isAllowed;
  }

}