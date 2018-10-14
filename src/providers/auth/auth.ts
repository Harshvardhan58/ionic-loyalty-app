import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Account } from '../../models/account.interface';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  ApiBaseURL = 'https://ionic58.herokuapp.com/';
  constructor(private http: Http) {
    
  }
  postData(credentials,type:String){
    return this.http.post(this.ApiBaseURL+type,credentials).toPromise();
  }

}
