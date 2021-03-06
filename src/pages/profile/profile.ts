import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profile={}
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage:Storage) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad ProfilePage');
    this.storage.get('user').then(user=>{
      this.profile = user;
    })
  }

}
