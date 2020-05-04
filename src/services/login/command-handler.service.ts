import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import {FormHelperService} from '../../framework';
import {LoginDataInterface} from '../../data-access-layer/login';
@Injectable()
export class LoginCommandHandlerService {
  isloggedIn = new BehaviorSubject<boolean>(false);
  constructor(
    private formHelperService: FormHelperService,
    private loginDataService: LoginDataInterface,
    private router: Router,
  ) { }
 
  login(formData: FormData, navigateUrl: string): void {
      this.loginDataService.login(formData).subscribe((data) => {
        if(data && data ==="Success"){
          this.isloggedIn.next(true);
          this.formHelperService.hideLoadingSpinner.next(true);
        } else if(data && data ==="Failure"){
          this.isloggedIn.next(false);
          this.formHelperService.hideLoadingSpinner.next(true);
        }
      },(error) => {
        this.formHelperService.hideLoadingSpinner.next(true);
        this.isloggedIn.next(false);
      })
  }
}