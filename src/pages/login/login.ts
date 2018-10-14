import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private toast:ToastController,private storage:Storage) {
  }

  navigateToRegisterPage():void{
    this.navCtrl.push('RegisterPage');
  }
  login(event){
    console.log(event.data);
    if(event.result=='success'){
      this.toast.create({
        message:`Login Succesfully`,
        duration:3000
      }).present();
      this.storage.set('user',event.data).then(()=>{
        this.navCtrl.setRoot('TabsPage');
      });
    }
    else{
      this.toast.create({
        message:`Error! Please try again`,
        duration:3000
      }).present();
      
    }
  }

}
