import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {LoginDataInterface} from './login-data.interface';
import {LoginDataModel} from './data-model'
import {FormModalConverterService} from '../../framework'
@Injectable()
export class LoginDataService implements LoginDataInterface {
  private baseUrl = 'http://localhost:8080/empdb/services/v1';
  constructor(
    private http: HttpClient,
    private fmConverter: FormModalConverterService
  ) { }
  
  login(formData: FormData): Observable<any>  {
    const loginData = new LoginDataModel();
    this.fmConverter.setProperty(formData, loginData);
    const url = `${this.baseUrl}/users/authenticate`;
    return this.http.post(url,loginData,{ responseType: 'text'});
  }
}
