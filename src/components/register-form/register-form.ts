import { Component, Output, EventEmitter } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { Account } from '../../models/account.interface';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account={} as Account;
  @Output() registerStatus:EventEmitter<any>;
  constructor(private authServive:AuthProvider) {
    console.log('Hello RegisterFormComponent Component');
    this.registerStatus = new EventEmitter<any>();
  }
  register(){
    this.authServive.postData(this.account,'register').then((data:any)=>{
      this.registerStatus.emit(JSON.parse(data._body));
    }).catch(err=>{
      this.registerStatus.emit(err);
    })
  }

}
