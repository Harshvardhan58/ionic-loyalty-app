import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private toast:ToastController,private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(event){
    if(event.result=='success'){
      this.toast.create({
        message:`Registered Succesfully`,
        duration:3000
      }).present();
      this.storage.set('user',event.data).then(()=>{
        this.navCtrl.setRoot('TabsPage');
      });
    }
    else if(event.result=='duplicate'){
      this.toast.create({
        message:`User already present with this email`,
        duration:3000
      }).present();
    }
    else{
      this.toast.create({
        message:`Error! Please try again`,
        duration:3000
      }).present();
    }
  }

}
