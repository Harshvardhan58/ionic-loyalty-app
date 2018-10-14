import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account } from '../../models/account.interface';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account={} as Account;
  @Output() loginStatus:EventEmitter<any>;
  constructor(private navCtrl:NavController,private authServive:AuthProvider) {
    console.log('Hello LoginFormComponent Component');
    this.loginStatus = new EventEmitter<any>();
  }
  navigateToRegisterPage():void{
    this.navCtrl.push('RegisterPage');
  }
  login(){
    this.authServive.postData(this.account,'login').then((data:any)=>{
      console.log(data);
      this.loginStatus.emit(JSON.parse(data._body));
    }).catch(err=>{
      this.loginStatus.emit(err);
    })
  }


}
